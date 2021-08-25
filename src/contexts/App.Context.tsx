import React from "react";

/** 
 *  Represents the user session data.
 * 
*/
export type Session = {
    userId: number
    userName: string;
    email: string;
    fullName: string;
    expireDate: Date;
    photoProfile: string;
}

/**
 * Represents the application context.
 *
 * @export
 * @interface IApplicationContext
 */
export interface IApplicationContext {
    /**
     * the translate instance.
     *
     * @memberof IApplicationContext
     */
    translate: (key: string) => string;
    /** 
     * The current user language.
    */
    language: string;
    /** 
     * function for set the language.
     * @param {string} language the language to set. 
     * @example es | en | fr | ...
    */
    setLanguage: (language: string) => void;
    /** 
     * The current user session.
    */
    session: Session | null;
    /** 
     *  function for set the session.
     * 
    */
    setSession: (session: Session | null) => void;
    /** 
     * Represent if the user is logged in.
    */
    isAuth: boolean;
    /** 
     * function for set the isAuth.
    */
    setIsAuth: (isAuth: boolean) => void;
}

/** 
 * Renders a default values for application context.
 * 
*/
const initialState: IApplicationContext = {
    translate: (key: string) => key,
    language: 'es',
    setLanguage: (language: string) => { },
    session: {
        userId: 0,
        userName: '',
        email: '',
        fullName: '',
        expireDate: new Date(),
        photoProfile: ''
    },
    setSession: (session: Session | null) => { },
    isAuth: false,
    setIsAuth: (isAuth: boolean) => { }
}

/** 
 * Context for the application.
*/
export const ApplicationContext = React.createContext<IApplicationContext>(initialState);
