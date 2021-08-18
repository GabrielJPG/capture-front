import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import LogoImage from '../../assets/img/logo.png';
import { AppLogo } from "../../shared/app-logo";


export const ProcsessSearch: React.FC = (props) => {
    return <div className="process">
        <AppLogo />
        {/* <span className="logo-container">
            <img src={LogoImage} alt="" className="logo-container__logo" />
            Front Capture
        </span> */}
    </div>
}

export const ProccessHeaderSearch: React.FC = (props) => {
    return (
        <div className="process-header">
            <div className="process-header--layout__header">
                <h2 className="primary-heading">Search</h2>
                <div className="process-header--layout__name u-no-margin">
                </div>
            </div>
            <div className=" process-header__info is-ontime">
                <div className="process-header__name">
                    <span className="name"></span>
                    <span className="number"></span>
                </div>
            </div>
        </div>
    )
}

export const Search: React.FC = (props) => {
    return (
        <div className="align-content-center d-flex h-100 justify-content-center process-workspace">
            <div className="mt-5 w-50 position-relative">
                <h3 className="secondary-heading text-center u-text-color u-size-2 mb-5">Búsqueda de expediente</h3>
                <div className="c-search-filter">
                    <input type="text" placeholder="Digite el numero de expediente" className="c-search-filter__input" />
                    <FontAwesomeIcon className="c-search-filter__icon" icon={faSearch} />
                    <a href="#" className="btn btn-primary btn-animate btn-filter-search" >Buscar</a>
                </div>

                <iframe className="w-100 h-50" src="http://demo.prodoctivity.info/anim/SearchDocument.html" frameBorder="0" ></iframe>
                {/* Apply " js-eb-show " class to expedient-box component to show it */}
                <div className="c-expedient-box">
                    <h2 className="mt-2 secondary-heading text-center u-size-2 u-text-color">Expediente encontrado</h2>
                    <hr />
                    <div className="d-flex justify-content-between mb-5">
                        <div>
                            <div className="u-text-color">Sub-Categoria</div>
                            <div className="u-bold">Caso</div>
                        </div>
                        <div>
                            <div className="u-text-color">Código de expediente interno</div>
                            <div className="u-bold">MH415541HF</div>
                        </div>
                        <div>
                            <div className="u-text-color">Código tribunal</div>
                            <div className="u-bold">055400000</div>
                        </div>
                    </div>
                    <p className="mb-5 mt-4 text-center u-color-primary">Escane el documento que desea agregar al expediente</p>
                    <a href="#" className="btn btn-primary btn-animate u-size-normal m-auto">Escanear</a>
                </div>
            </div>
        </div>
    )
}
