import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ApplicationContext } from '../../../contexts/App.Context';


export const SearchBox: React.FC = (props) => {
    const { translate } = useContext(ApplicationContext);
    return <div className="c-search-box">
        <input type="text" placeholder={translate("FindProcess")} className="c-search-box__input" />
        <i className=" c-search-box__filter"><FontAwesomeIcon icon={faFilter} /></i>
    </div>;
};
