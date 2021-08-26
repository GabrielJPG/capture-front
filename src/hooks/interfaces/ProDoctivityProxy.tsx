
/**
 * Represents ProDoctivity methods
 *
 * @export
 * @interface ProDoctivityProxy
 */
export interface IProDoctivityProxy {
    /**
     * Represents ProDoctivity methods for login with provide user name and password
     *
     * @memberof ProDoctivityProxy
     * @param {string} userName
     * @param {string} password
     * @returns {Promise<any>}
     */
    login: (username: string, password: string) => Promise<Response>;
}
