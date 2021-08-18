import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faFolder, faClock, faFilter, faUser, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import LogoImage from '../../assets/img/logo.png';

export const FilesPage: React.FC = (props) => {
    return <div className="process-workspace">
        Files Content here
    </div>
}

export const FileProcessHeader: React.FC = (props) => {
    return (
        <div className="process-header">
            <div className="process-header--layout__header">

                <h2 className="primary-heading">Files</h2>
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


export const FileSearchProcess: React.FC = (props) => {
    return <div className="process">
        <span className="logo-container">
            <img src={LogoImage} alt="" className="logo-container__logo" />
            Front Capture
        </span>

        {/* Esto session de aqui debe ser un componente dinamico injectable */}
        <div className="process__heading">
            <span className="process__amount">0</span>
            <h3 className="secondary-heading">Procesos con documentos faltantes </h3>
            <h4 className="tertiary-heading">Seleccione para completar documentos</h4>
        </div>

        <div className="c-search-box">
            <input type="text" placeholder="Buscar Proceso" className="c-search-box__input" />
            <i className=" c-search-box__filter"><FontAwesomeIcon icon={faFilter} /></i>
        </div>

        <div className="process__wrapper">
            <div className="process__content u-hidden-scroll">
                {/* Componente que desplieaa los procesos */}
                <div className="c-process-info is-ontime is-active">
                    <div className="c-process-info__title">
                        <i className="c-process-info__icon"><FontAwesomeIcon icon={faFolder} /></i>
                        Solicitud de préstamo Hipotecario comercial
                    </div>
                    <div className="c-process-info__content">
                        <div className="c-process-info__name">
                            <FontAwesomeIcon icon={faUser} className="c-process-info__icon c-process-info__icon--user"/>
                            Juan Medina Carvajal
                        </div>
                        <div className="c-process-info__bottom">
                            <div className="c-process-info__owner">
                                <label className="label">Creado por: Juan Peréz</label>
                                <FontAwesomeIcon icon={faInfoCircle} className="tooltip__icon ml-2"/>
                                <span className="tooltip tooltip--owner">
                                    <i className="fas fa-info-circle tooltip__icon"></i>
                                    <span className="tooltip-text tooltip-text--owner">
                                        Email: juanperez@gmail.com<br />
                                        Teléfono: 849-0789-0465
                                    </span>
                                </span>
                            </div>
                            <div className="c-process-info__date">
                                <div className="date">
                                    <i><FontAwesomeIcon icon={faCalendar} /></i><span className="info-date">12/02/2020</span>
                                </div>
                                <div className="hour">
                                    <i><FontAwesomeIcon icon={faClock} /></i><span className="info-date">12:56 pm</span>
                                </div>
                            </div>
                            <span className="tooltip">
                                <div className="process-count">
                                    <span className="process-count__amount">3/9</span>
                                    {/* This circler image replace for same component */}
                                    <svg viewBox="0 0 36 36" className="process-count__chart">
                                        <path className="process-count__circle" stroke-dasharray="30, 100" d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    {/* To Here */}
                                </div>
                                <span className="tooltip-text">
                                    Faltan 6 documentos para completar los 9 requeridos.
                                </span>
                            </span>
                        </div>
                    </div>
                    <span className="tooltip tooltip--state ">
                        <div className="c-process-info__state  ">

                        </div>
                        <span className="tooltip-text tooltip-text--state">
                            Vence en 3 días, 7 horas y 23 minutos
                        </span>
                    </span>
                </div>
                {/* Hasta aqui  */}
            </div>
            {/* Esto es una animacion dinamica y debe de ocultarse a demanda */}
            <div className="preloader">
                <div className="process-placeholder">
                    <div className="process-placeholder__title"></div>
                    <div className="process-placeholder__user"></div>
                    <div className="process-placeholder__owner"></div>
                    <div className="process-placeholder__date">
                        <div className="placeholder__date"></div>
                        <div className="placeholder__date"></div>
                    </div>
                    <div className="process-placeholder__count"></div>
                </div>
                <div className="process-placeholder">
                    <div className="process-placeholder__title"></div>
                    <div className="process-placeholder__user"></div>
                    <div className="process-placeholder__owner"></div>
                    <div className="process-placeholder__date">
                        <div className="placeholder__date"></div>
                        <div className="placeholder__date"></div>
                    </div>
                    <div className="process-placeholder__count"></div>
                </div>
                <div className="process-placeholder">
                    <div className="process-placeholder__title"></div>
                    <div className="process-placeholder__user"></div>
                    <div className="process-placeholder__owner"></div>
                    <div className="process-placeholder__date">
                        <div className="placeholder__date"></div>
                        <div className="placeholder__date"></div>
                    </div>
                    <div className="process-placeholder__count"></div>
                </div>
            </div>
            {/* La animacion llega hasta aqui */}
        </div>
        {/* Hasta aqui */}

    </div>
}