import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFolder, faQrcode, faSearch, faCog } from '@fortawesome/free-solid-svg-icons';
import { faHome as faHomeDuo, faFolder as faFordelDuo, faQrcode as faQrCodeDuo, faSearch as faSearchDuo, faCog as faCogDuo } from 'obit-fa-pro-duotone';

export const menu = [
    {
        icon: <i className="c-navbar__icon"><FontAwesomeIcon icon={faHome} /></i>,
        activeIcon: <i className="c-navbar__icon"><FontAwesomeIcon icon={faHomeDuo} /></i>,
        active: false,
        linkTo: '/app/home',
        name: 'Home'
    },
    {
        icon: <i className="c-navbar__icon"><FontAwesomeIcon icon={faFolder} /></i>,
        activeIcon: <i className="c-navbar__icon"><FontAwesomeIcon icon={faFordelDuo} /></i>,
        active: false,
        linkTo: '/app/files',
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
];
