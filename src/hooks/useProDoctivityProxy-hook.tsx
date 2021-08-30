import { FluencyConnection } from "./types/FluencyConnection";
import { IProDoctivityApiProxy } from "./interfaces/ProDoctivityProxy";

/**
 * Hook to get the ProDoctivityProxy instance
 * 
 * @implements {IProDoctivityApiProxy}
 * @param connection The connection to use
 * @returns The ProDoctivityProxy instance
*/
export const useProDoctivityProxy = (conn: FluencyConnection): IProDoctivityApiProxy => {
    const Coordinator = conn.coordinatorUrl;
    const resourceLogin = '/api/v1/prodoctivityapi/users/profile?includeDocumentTypeAccessList=true';
    const apiKey = conn.apiKey;
    const apiKeyName = conn.apiKeyName;

    const login = async (username: string, password: string): Promise<any> => {
        const completeUsername = username + '@prodoctivity';
        const authorization = 'Basic ' + btoa(completeUsername + ':' + password)
        const completeResourceLogin = Coordinator + resourceLogin;
        return fetch(completeResourceLogin, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': authorization,
                'Access-Control-Request-Method': 'GET/POST/OPTIONS',
                [apiKeyName]: apiKey
            })
        })
    }
    return {
        login,
    }
};