import i18n from '../translation/i18n';
import { ILanguageHook } from './interfaces/ILanguageHook';
import { useLocalStorage } from './localstorage-hook';

/** 
 * Hook for handling language changes and translate functions.
 * @implements {ILanguageHook}
 * @param {string} [defaultLanguage] - The default language to use.
 * @returns {ILanguageHook} implements the hook interface.
 * 
*/
export const useLanguage = (defaultLang: string): ILanguageHook => {
    const translate = (key: string) => i18n.t(key);
    const { value, setValue } = useLocalStorage<string>('lang', defaultLang);
    i18n.changeLanguage(value);
    const applyLanguage = (lang: string) => {
        setValue(lang);
        i18n.changeLanguage(lang);
    }
    return {
        language: value,
        setLanguage: applyLanguage,
        translate
    }
}