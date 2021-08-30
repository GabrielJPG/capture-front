import { FluencyConnection } from "./types/FluencyConnection";
import { IProDoctivityApiProxy } from "./interfaces/ProDoctivityProxy";

/**
 * Hook to get the ProDoctivityProxy instance
 *
 * @implements {IProDoctivityApiProxy}
 * @param connection The connection to use
 * @returns The ProDoctivityProxy instance
*/

export const useCaptureProxy = (conn: FluencyConnection): IProDoctivityApiProxy => {

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
    };
    return {
        login: login2,
    };
};
