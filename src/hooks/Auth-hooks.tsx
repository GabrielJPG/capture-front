
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ApplicationContext } from "../contexts/App.Context";
import profile from '../assets/img/profile.png';
import { IAuth } from "./interfaces/IAuth";
import { useLocalStorage } from "./localstorage-hook";
import { useAppProxy, useAppSetting } from "./db-hook";
import { useNotify } from "./Notification-hook";

/**
 * Hook for auth
 * Customize this hook to add your own auth logic
 * @exports IAuth implemented object
*/
export const useProvideAuth = (): IAuth => {
    const context = useContext(ApplicationContext)
    const db = useAppSetting();
    const history = useHistory();
    const localSession = useLocalStorage<any>('user-session', {});
    const sessionAuth = useLocalStorage<boolean>('session-auth', false);
    const login = (user: string, password: string) => new Promise<void>((resolve) => {
        db.getSettings().then(settings => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const proxy = useAppProxy('fluency', settings.settings);
            proxy.login(user, password)
                .then(res => {
                    if (res.status === 200) {
                        return res.json();
                    }
                    //throw new Error(res.statusText);
                    return Promise.reject(res.statusText);
                })
                .then(res => {
                    context.setSession(res);
                    localSession.setValue(res);
                    context.setIsAuth(true);
                    sessionAuth.setValue(true);
                    resolve();
                })
            // .catch((err) => {
            //     Promise.reject(err);
            //     //notify.show('Invalid login')
            //     //throw new Error('LoginNotFound');
            // });
        });
    });
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
        logout
    }
}