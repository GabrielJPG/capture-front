import React from "react";
import { Link, useLocation } from 'react-router-dom'
import { menu } from "./menu";

export const MenuSection: React.FC<{ onChangeOption: (option: string) => void; current: string; }> = (props) => {
    let location = useLocation();
    const allRoutes = menu.map((route) => route.linkTo.replace('/app', ''))

    allRoutes.forEach((route, index) => {
        if (location.pathname.replace('/app', '').includes(route)) {
            menu[index].active = true;
        } else {
            menu[index].active = false;
        }
    })

    return <nav className="c-navbar">
        <ul className="c-navbar__content">
            {menu.map(x => <MenuItem active={x.active} icon={x.icon} linkTo={x.linkTo} activeIcon={x.activeIcon} />)}
        </ul>
    </nav>;
};

export const MenuItem: React.FC<{ icon: any; activeIcon: any; active: boolean; linkTo: any; }> = (props) => {
    const { icon, activeIcon, active, linkTo } = props;
    return <li className={`c-navbar__item ${active ? 'active' : ''}`}>
        <Link to={linkTo}>
            {active ? activeIcon : icon}
        </Link>
    </li>;
};

