import dayjs from "dayjs";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ApplicationContext, Session } from "../contexts/App.Context";
import profile from '../assets/img/profile.png';

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
    login: (user: string, password: string) => Promise<void>;
    /**
     * Represents function to handle authentication [logout].
     *
     * @memberof IAuth
     */
    logout: () => void;
}


/**
 * Hook for auth
 * Customize this hook to add your own auth logic
 * @exports IAuth implemented object
*/
export const useProvideAuth = (): IAuth => {
    const { session, setSession, isAuth, setIsAuth } = useContext(ApplicationContext)
    const history = useHistory();
    const login = (user: string, password: string) => new Promise<void>((resolve) => {
        setTimeout(() => {
            setSession({
                userId: 1,
                userName: user,
                fullName: 'Prodoctivity User',
                email: 'prodoctivity@prodoctivity@mail.com',
                expireDate: dayjs().add(1, "days").toDate(),
                photoProfile: profile,
            })
            setIsAuth(true);
            resolve();
        }, 1000);
    });
    const logout = () => {
        setSession(null);
        setIsAuth(false);
        history.push("/");
    };
    return {
        isAuth,
        session,
        login,
        logout
    }
}