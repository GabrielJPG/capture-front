import React, { useContext } from "react";
import { ApplicationContext } from "../../../contexts/App.Context";

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
            flagUri: "img/spain-flag.webp",
            active: true,
            short: 'es'
        },
        {
            language: "English",
            flagUri: "img/usa-flag.webp",
            active: true,
            short: 'en'
        },
        {
            language: "French",
            flagUri: "img/french-flag.webp",
            active: false,
            short: 'fr'
        },
        {
            language: "Portuguese",
            flagUri: "img/Portuguese-flag.webp",
            active: false,
            short: 'pt'
        }
    ]
    const currentLang = listOfLanguages.find(l => l.short === language)?.language as string;

    return <div className="language">
        <div className="language__flag">
            <img src="img/spain-flag.webp" alt="" />
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


