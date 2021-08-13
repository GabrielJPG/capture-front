import React, { useState } from "react";

export const Layout: React.FC = (props) => {
    const [currentOption, setCurrentOption] = useState('Home')
    return <div className="l-container-base">
        <section className="l-section-bag">
            <MenuSection current={currentOption} onChangeOption={(value) => setCurrentOption(value)} />
            <div className="process">
            </div>
        </section>
        <section className="section-workspace">
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
            {menu.map(x => <MenuItem {...x} onClick={props.onChangeOption} />)}
        </ul>
    </nav>
}

export const MenuItem: React.FC<{ icon: string, active: boolean, linkTo: any, name: string, onClick: (value: string) => void }> = (props) => {
    const { icon, active, linkTo, name, onClick } = props
    return <li className={`c-navbar__item ${active ? 'active' : ''}`}>
        <a href={linkTo} onClick={(e) => onClick(name)}>
            <i className={`c-navbar__icon ${active ? 'fad' : 'fas'} ${icon}`}>{name}</i>
        </a>
    </li>
}


const menu = [
    {
        icon: 'fa-home',
        active: false,
        linkTo: '/app',
        name: 'Home'
    },
    {
        icon: 'fa-folder',
        active: false,
        linkTo: '/app/folder',
        name: 'Folder'
    },
    {
        icon: 'fa-qrcode',
        active: false,
        linkTo: '/app/qrcode',
        name: 'QRCode'
    },
    {
        icon: 'fa-search',
        active: false,
        linkTo: '/app/search',
        name: 'Search'
    },
    {
        icon: 'fa-cog',
        active: false,
        linkTo: '/app/settings',
        name: 'Settings'
    }

]