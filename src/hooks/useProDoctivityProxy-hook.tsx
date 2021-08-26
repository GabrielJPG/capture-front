import { FluencyConnection } from "./types/FluencyConnection";
import { IProDoctivityProxy } from "./interfaces/ProDoctivityProxy";

/**
 * Hook to get the ProDoctivityProxy instance
 * 
 * @implements {IProDoctivityProxy}
 * @param connection The connection to use
 * @returns The ProDoctivityProxy instance
*/
export const useProDoctivityProxy = (conn: FluencyConnection): IProDoctivityProxy => {

    const server = conn.siteUrl
    const resourceLogin = '/api/v1/users';
    const apiKey = conn.apiKey;;
    const apiKeyName = conn.apiKeyName;

    const login = (username: string, password: string): Promise<any> => {
        const completeUsername = username + '@prodoctivity';
        return fetch(server + resourceLogin, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(completeUsername + ':' + password),
                [apiKeyName]: apiKey
            }
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const login2 = (username: string, password: string): Promise<any> => {
        const serverUrl = 'http://18.218.98.135:8095';
        const codec = btoa(`${username + '@prodoctivity'}:${password}`);
        const url = new URL(serverUrl + '/api/accounts/authentication');
        return fetch(url.toString(), {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${codec}`
            }
        });
    }
    return {
        login,
    }
};