import React from "react";

export type Session = {
    userName: string;
    email: string;
    fullName: string;
    expireDate: Date;
}

export interface IApplicationContext {
    translate: (key: string) => string;
    language: string;
    setLanguage: (language: string) => void;
    session: Session | null;
    setSession: (session: Session | null) => void;
    isAuth: boolean;
    setIsAuth: (isAuth: boolean) => void;
}


const initialState: IApplicationContext = {
    translate: (key: string) => key,
    language: 'es',
    setLanguage: (language: string) => { },
    session: {
        userName: '',
        email: '',
        fullName: '',
        expireDate: new Date()
    },
    setSession: (session: Session | null) => { },
    isAuth: false,
    setIsAuth: (isAuth: boolean) => { }
}

export const ApplicationContext = React.createContext<IApplicationContext>(initialState);
