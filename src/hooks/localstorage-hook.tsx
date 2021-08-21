import { useEffect, useState } from "react";
import { ILocalStorage } from "./interfaces/ILocalStorage";

const getStorageValue = <T extends {}>(key: string, defaultValue: T): T => {
    const value = localStorage.getItem(key);
    const initial = JSON.parse(value as any) as T;
    return initial || defaultValue;
}

/**
 * hook to get/set localstorage values
 * @implements {ILocalStorage}
 * @param {string} key
 * @param {any} defaultValue
 * @template T a type of value
 * @returns {any} an object of type T
 * 
*/
export const useLocalStorage = <T extends {}>(key: string, defaultValue: T): ILocalStorage<T> => {
    const [value, setValue] = useState(getStorageValue(key, defaultValue));
    useEffect(() => {
        console.log(`useLocalStorage: ${key} ${value}`);
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return {
        value: value,
        setValue: setValue
    };
}