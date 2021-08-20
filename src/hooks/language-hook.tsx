import { useState } from 'react';
import i18n from '../translation/i18n';

/**
 * Responsible for handling language changes.
 *
 * @export
 * @interface ILanguageHook
 */
export interface ILanguageHook {
    language: string;
    setLanguage: (language: string) => void
    translate: (key: string) => string;
}

/** 
 * Hook for handling language changes and translate functions.
*/
export const useLanguage = (defaultLang: string): ILanguageHook => {
    const translate = (key: string) => i18n.t(key)
    const [language, setLanguage] = useState(defaultLang);
    const applyLanguage = (lang: string) => {
        setLanguage(lang);
        i18n.changeLanguage(lang);
    }
    return {
        language,
        setLanguage: applyLanguage,
        translate
    }
}