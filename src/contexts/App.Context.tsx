import React from "react";

export interface IApplicationContext {
    translate: (key: string) => string;
    language: string;
    setLanguage: (language: string) => void;
}


const initialState: IApplicationContext = {
    translate: (key: string) => key,
    language: 'es',
    setLanguage: (language: string) => { }
}

export const ApplicationContext = React.createContext<IApplicationContext>(initialState);
