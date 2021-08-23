import dayjs from "dayjs";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ApplicationContext } from "../contexts/App.Context";
import profile from '../assets/img/profile.png';
import { IAuth } from "./interfaces/IAuth";
import { useLocalStorage } from "./localstorage-hook";

/**
 * Hook for auth
 * Customize this hook to add your own auth logic
 * @exports IAuth implemented object
*/
export const useProvideAuth = (): IAuth => {
    const context = useContext(ApplicationContext)
    const history = useHistory();
    const localSession = useLocalStorage<any>('user-session', {});
    const sessionAuth = useLocalStorage<boolean>('session-auth', false);
    const login = (user: string, password: string) => new Promise<void>((resolve) => {
        setTimeout(() => {
            context.setSession({
                userId: 1,
                userName: user,
                fullName: 'Prodoctivity User',
                email: 'prodoctivity@prodoctivity@mail.com',
                expireDate: dayjs().add(1, "days").toDate(),
                photoProfile: profile,
            })
            context.setIsAuth(true);
            localSession.setValue({
                userId: 1,
                userName: user,
                fullName: 'Prodoctivity User',
                email: 'prodoctivity@prodoctivity@mail.com',
                expireDate: dayjs().add(1, "days").toDate(),
                photoProfile: profile,
            })
            sessionAuth.setValue(true);
            resolve();
        }, 1000);
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
        isAuth: context.isAuth || sessionAuth.value,
        session: context.session || localSession.value,
        login,
        logout
    }
}