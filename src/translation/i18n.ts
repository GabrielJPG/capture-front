import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './es.json'
import en from './en.json'
import fr from './fr.json'
import pt from './pt.json'

const resources = {
    en: {
        translation: en,
    },
    es: {
        translation: es,
    },
    fr: {
        translation: fr,
    },
    pt: {
        translation: pt,
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es',
        fallbackLng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false // not needed for react!!
        }
    });

export default i18n;