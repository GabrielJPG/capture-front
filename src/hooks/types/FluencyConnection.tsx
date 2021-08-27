

/** 
 * Represents a connection to a ProDoctivity server.
 * 
 * @export {CaptureConnection}
*/
export type FluencyConnection = {
    /**
     * ProDoctivity server URL.
     *
     * @type {string}
     */
    siteUrl: string;
    /**
     * Coordinator site URL.
     *
     * @type {string}
     */
    coordinatorUrl: string;
    /**
    * ProDoctivity server API key.
    *
    * @type {string}
    */
    apiKey: string;
    /**
     * ProDoctivity server API key name.
     *
     * @type {string}
     */
    apiKeyName: string;
    /**
     * ProDoctivity server user name
     *
     * @type {string}
     */
    username: string;
    /**
     * ProDoctivity server user password
     *
     * @type {string}
     */
    password: string;
    /**
     * Represents if the should be use provide credentials. 
     *
     * @type {boolean}
     */
    useLoggedUseCredentials: boolean;
};
