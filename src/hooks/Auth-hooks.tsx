
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ApplicationContext } from "../contexts/App.Context";
import { IAuth } from "./interfaces/IAuth";
import { useLocalStorage } from "./localstorage-hook";
import { useAppSetting } from "./useAppSetting-hook";
import { useAppProxy } from "./useAppProxy-hook";

/**
 * Hook for auth
 * Customize this hook to add your own auth logic
 * @exports IAuth implemented object
*/
export const useProvideAuth = (): IAuth => {
    const context = useContext(ApplicationContext)
    const [failLogin, setFailLogin] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const db = useAppSetting();
    const history = useHistory();
    const localSession = useLocalStorage<any>('user-session', {});
    const sessionAuth = useLocalStorage<boolean>('session-auth', false);
    const login = async (username: string, password: string) => {
        return db.getSettings().then(settings => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const proxy = useAppProxy('fluency', settings.settings);
            return proxy.login(username, password)
                .then(response => {
                    return response.ok && response.json ? response.json() : Promise.reject(response);
                })
                .then((res: any) => {
                    context.setSession(res);
                    localSession.setValue(res);
                    context.setIsAuth(true);
                    sessionAuth.setValue(true);
                    setFailLogin(false);
                    setErrorMessage("");
                })
                .catch(err => {
                    context.setIsAuth(false);
                    sessionAuth.setValue(false);
                    setFailLogin(true);
                    setErrorMessage(err.message);
                    return Promise.reject(err);
                })
        });
    }
    const logout = () => new Promise<void>((resolve) => {
        localSession.destroy();
        sessionAuth.destroy();
        history.push("/");
        setTimeout(() => {
            context.setSession(null);
            context.setIsAuth(false);
            resolve();
        }, 1000);

    });


    return {
        isAuth: context.isAuth,
        session: context.session,
        login,
        logout,
        errorInLogin: failLogin,
        errorMessage: errorMessage
    }
}