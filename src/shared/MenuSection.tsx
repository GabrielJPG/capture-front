import React from "react";
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFolder, faQrcode, faSearch, faCog } from '@fortawesome/free-solid-svg-icons';
import { faHome as faHomeDuo, faFolder as faFordelDuo, faQrcode as faQrCodeDuo, faSearch as faSearchDuo, faCog as faCogDuo } from 'obit-fa-pro-duotone';

export const MenuSection: React.FC<{ onChangeOption: (option: string) => void; current: string; }> = (props) => {
    let location = useLocation();

    console.log(location)

    menu.forEach(x => {
        if (x.name === props.current) {
            x.active = true;
        }
    });
    return <nav className="c-navbar">
        <ul className="c-navbar__content">
            {menu.map(x => <MenuItem name={x.name} active={x.active} icon={x.icon} linkTo={x.linkTo} activeIcon={x.activeIcon} onClick={props.onChangeOption} />)}
        </ul>
    </nav>;
};

export const MenuItem: React.FC<{ icon: any; activeIcon: any; active: boolean; linkTo: any; name: string; onClick: (value: string) => void; }> = (props) => {
    const { icon, activeIcon, active, linkTo, name, onClick } = props;
    return <li className={`c-navbar__item ${active ? 'active' : ''}`}>
        <Link to={linkTo}>
            {active ? activeIcon : icon}
        </Link>
        {/* <a href={linkTo} onClick={(e) => onClick(name)}>
            {active ? activeIcon : icon}
        </a> */}
    </li>;
};
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
