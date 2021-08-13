import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from '../assets/img/profile.png';
import { faHome, faCalendar, faSortDown, faClock, faFolder, faFilter, faQrcode, faSearch, faCog } from '@fortawesome/free-solid-svg-icons';
import { faHome as faHomeDuo, faFolder as faFordelDuo, faQrcode as faQrCodeDuo, faSearch as faSearchDuo, faCog as faCogDuo } from 'obit-fa-pro-duotone';

import LogoImage from '../assets/img/logo.png';
export const Layout: React.FC = (props) => {
    const [currentOption, setCurrentOption] = useState('Home')
    return <div className="l-container-base">
        <section className="l-section-bag">
            <MenuSection current={currentOption} onChangeOption={(value) => setCurrentOption(value)} />
            <div className="process">
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
                                    <span className="tooltip">

                                        <i className="fas fa-user c-process-info__icon c-process-info__icon--user"></i>

                                        <span className="tooltip-text tooltip-text--client">
                                            Cliente
                                        </span>
                                    </span>
                                    Juan Medina Carvajal
                                </div>
                                <div className="c-process-info__bottom">
                                    <div className="c-process-info__owner">
                                        <label className="label">Creado por: Juan Peréz</label>
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
        </section>
        <section className="section-workspace">
            {/* this section is real body */}
            <header className="header">
                <div className="c-account">
                    <img src={profile} alt="x" className="c-account__image" />
                    <nav className="c-account__logout">
                        <div className="c-account__name">Anne Lorraine Hernández</div>
                        <ul>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#">Log out <FontAwesomeIcon icon={faSortDown} /></a>
                                <ul>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li><a href="#">Perfil</a></li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li><a href="#">Cerrar Sesión</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {props.children}
        </section>
    </div>
}

export const MenuSection: React.FC<{ onChangeOption: (option: string) => void, current: string }> = (props) => {
    menu.forEach(x => {
        if (x.name === props.current) {
            x.active = true
        }
    })
    return <nav className="c-navbar">
        <ul className="c-navbar__content">
            {menu.map(x => <MenuItem name={x.name} active={x.active} icon={x.icon} linkTo={x.linkTo} activeIcon={x.activeIcon} onClick={props.onChangeOption} />)}
        </ul>
    </nav>
}

export const MenuItem: React.FC<{ icon: any, activeIcon: any, active: boolean, linkTo: any, name: string, onClick: (value: string) => void }> = (props) => {
    const { icon, activeIcon, active, linkTo, name, onClick } = props
    return <li className={`c-navbar__item ${active ? 'active' : ''}`}>
        <a href={linkTo} onClick={(e) => onClick(name)}>
            {active ? activeIcon : icon}
        </a>
    </li>
}


const menu = [
    {
        icon: <i className="c-navbar__icon"><FontAwesomeIcon icon={faHome} /></i>,
        activeIcon: <i className="c-navbar__icon"><FontAwesomeIcon icon={faHomeDuo} /></i>,
        active: false,
        linkTo: '/app',
        name: 'Home'
    },
    {
        icon: <i className="c-navbar__icon"><FontAwesomeIcon icon={faFolder} /></i>,
        activeIcon: <i className="c-navbar__icon"><FontAwesomeIcon icon={faFordelDuo} /></i>,
        active: false,
        linkTo: '/app/folder',
        name: 'Folder'
    },
    {
        icon: <i className="c-navbar__icon"><FontAwesomeIcon icon={faQrcode} /></i>,
        activeIcon: <i className="c-navbar__icon"><FontAwesomeIcon icon={faQrCodeDuo} /></i>,
        active: false,
        linkTo: '/app/qrcode',
        name: 'QRCode'
    },
    {
        icon: <i className="c-navbar__icon"><FontAwesomeIcon icon={faSearch} /></i>,
        activeIcon: <i className="c-navbar__icon"><FontAwesomeIcon icon={faSearchDuo} /></i>,
        active: false,
        linkTo: '/app/search',
        name: 'Search'
    },
    {
        icon: <i className="c-navbar__icon"><FontAwesomeIcon icon={faCog} /></i>,
        activeIcon: <i className="c-navbar__icon"><FontAwesomeIcon icon={faCogDuo} /></i>,
        active: false,
        linkTo: '/app/settings',
        name: 'Settings'
    }

]