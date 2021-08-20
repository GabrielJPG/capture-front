import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ApplicationContext } from '../../../contexts/App.Context';

/**
 *props for render SearchBox
*/
export type SearchBoxProps = {
    /**
     * emit value of search box
     * @param {string} searchText Value for filter list
     */
    emitSearchParameter: (searchValue: string) => void;
}

/**
 *  SearchBox component for main screen
*/
export const SearchBox: React.FC<SearchBoxProps> = (props) => {
    const { translate } = useContext(ApplicationContext);
    return <div className="c-search-box">
        <input type="text" placeholder={translate("FindProcess")} className="c-search-box__input" onChange={(e) => props.emitSearchParameter(e.target.value)} />
        <i className=" c-search-box__filter"><FontAwesomeIcon icon={faFilter} /></i>
    </div>;
};
