import { useState } from "react";

export interface IAuth {
    isAuth: boolean;
    user: {
        id: string;
        name: string;
        email: string;
    };
    login: (user: string, password: string) => void;
    logout: () => void;
}

export const useProvideAuth = (): IAuth => {
    const [user, setUser] = useState({} as any);
    const [isAuth, setIsAuth] = useState(false);
    const login = (user: string, password: string) => {
        setTimeout(() => {
            setUser({
                id: 1,
                name: "xxxxxxx",
                email: "yyyyyy@mail.com"
            });
            setIsAuth(true);
        }, 1000);
    };
    const logout = () => {
        setUser({});
        setIsAuth(false);
    };
    return {
        isAuth,
        user,
        login,
        logout
    }
}