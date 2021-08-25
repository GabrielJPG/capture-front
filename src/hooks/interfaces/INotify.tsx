/**
 * Represents notification hook functions
*/

export interface INotify {
    /**
     * Displays a notification
     *
     *@param {message} message to display
     *
     * @memberof INotify
     */
    show: (message: string) => void;
}
