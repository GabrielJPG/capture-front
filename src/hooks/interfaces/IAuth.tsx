import { Session } from "../../contexts/App.Context";

/**
 * Represents responsibility of a component to handle authentication.
 *
 * @export
 * @interface IAuth
 */

export interface IAuth {
    /**
     *
     * Represents the is the current user is authenticated.
     * @type {boolean}
     * @memberof IAuth
     */
    isAuth: boolean;
    /**
     * Returns the current user info.
     *
     * @type {(Session | null)}
     * @memberof IAuth
     */
    session: Session | null;
    /**
     * Represents function to handle authentication [login].
     *
     * @param {string} username
     * @param {string} password
     * @type {(() => Promise<void>)}
     * @memberof IAuth
     */
    login: (user: string, password: string) => Promise<any>;
    /**
     * Represents function to handle authentication [logout].
     *
     * @memberof IAuth
     */
    logout: () => Promise<void>;
    /**
     * Represents if currents trying to login with currents credentials is valid.
     *
     * @type {boolean}
     * @memberof IAuth
     */
    errorInLogin: boolean;
    /**
     * Display error message if login is invalid.
     *
     * @type {string}
     * @memberof IAuth
     */
    errorMessage: string;
}