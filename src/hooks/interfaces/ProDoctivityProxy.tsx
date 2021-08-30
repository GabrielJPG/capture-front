
/**
 * Represents ProDoctivity methods
 *
 * @export
 * @interface IApiProxy
 */
export interface IProDoctivityApiProxy {
    /**
     * Represents ProDoctivity methods for login with provide user name and password
     *
     * @memberof IApiProxy
     * @param {string} userName
     * @param {string} password
     * @returns {Promise<any>}
     */
    login: (username: string, password: string) => Promise<Response>;
}
