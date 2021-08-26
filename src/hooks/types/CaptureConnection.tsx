
/** 
 * Represents a connection to a capture server.
 * 
 * @export {CaptureConnection}
*/
export type CaptureConnection = {
    /** 
     * The url of the capture server.
     * @type {string}
     * @memberof CaptureConnection
    */
    siteUrl: string;
    /** 
     * The username for connect to server
     * @type {string}
     * @memberof CaptureConnection
    */
    username: string;
    /** 
     * The password for connect to server
     * @type {string}
     * @memberof CaptureConnection
    */
    password: string;
    /** 
     * if for connect to server should be use provide user credentials.
     * @type {boolean}
     * @memberof CaptureConnection
    */
    useLoggedUseCredentials: boolean;
};
