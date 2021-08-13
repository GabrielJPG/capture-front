import React, { useContext } from "react";
import { ApplicationContext } from "../../../contexts/App.Context";
import esIcon from "../../../assets/img/spain-flag.webp"
import frIcon from "../../../assets/img/france-flag.webp"
import usIcon from "../../../assets/img/usa-flag.webp"
import ptIcon from "../../../assets/img/portuguese-flag.webp"

export type LangItem = {
    language: string,
    flagUri: string,
    active: boolean,
    short: string,
}


export const LanguageSelector: React.FC = () => {
    const { translate, setLanguage, language } = useContext(ApplicationContext);

    const listOfLanguages: Array<LangItem> = [
        {
            language: "Spanish",
            flagUri: esIcon,
            active: true,
            short: 'es'
        },
        {
            language: "English",
            flagUri: usIcon,
            active: true,
            short: 'en'
        },
        {
            language: "French",
            flagUri: frIcon,
            active: false,
            short: 'fr'
        },
        {
            language: "Portuguese",
            flagUri: ptIcon,
            active: false,
            short: 'pt'
        }
    ]
    const currentLang = listOfLanguages.find(l => l.short === language)?.language as string;

    return <div className="language">
        <div className="language__flag">
            <img src={listOfLanguages.find(l => l.short === language)?.flagUri} alt="" />
        </div>

        <span className="language__dropdown">
            <button>
                {translate(currentLang)}
            </button>
            <label>
                <input type="checkbox" />
                <ul>
                    {listOfLanguages.filter(x => x.active && x.language !== language)
                        .map((lang, index) => (<LanguageItem key={index.toString()} onClick={(shortLang) => setLanguage(shortLang)} language={lang} />))}
                </ul>
            </label>
        </span>
    </div>;
};

const LanguageItem: React.FC<{ language: LangItem, onClick: (shortLang: string) => void }> = (props) => {
    const { translate } = useContext(ApplicationContext);
    return <li onClick={() => props.onClick(props.language.short)}>
        <div className="language__flag">
            <img src={props.language.flagUri} alt={props.language.language} />
        </div>
        {translate(props.language.language)}
    </li>
}


