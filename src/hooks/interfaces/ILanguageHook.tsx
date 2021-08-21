/**
 * Responsible for handling language changes.
 *
 * @export
 * @interface ILanguageHook
 */

export interface ILanguageHook {
    /** 
     * Current user  language.
     * @type {string}
     * @memberof ILanguageHook
    */
    language: string;
    /**
     * Set the language.
     * 
     * @param {string} language - The language to set.
     *
     * @memberof ILanguageHook
     */
    setLanguage: (language: string) => void;
    /**
     * translation function.
     * 
     * @param {string} key - The key to translate.
     *
     * @memberof ILanguageHook
     */
    translate: (key: string) => string;
}
