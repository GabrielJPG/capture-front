import React, { useContext, useState } from 'react';
import { ApplicationContext } from '../../contexts/App.Context';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuSection } from '../Menu/MenuSection';
import { useProvideAuth } from '../../hooks/Auth-hooks';
import { Link } from 'react-router-dom';
import { AppLogo } from '../logo/app-logo';
;


export type LayoutProps = {
    SearchPanel: JSX.Element;
    ProcessHeader: JSX.Element;
    hidePanel: boolean;
    children?: any;

}

export const Layout: React.FC<LayoutProps> = (props) => {
    const { translate, session } = useContext(ApplicationContext);
    const auth = useProvideAuth()

    const [currentOption, setCurrentOption] = useState('Home')
    return <div className={`l-container-base ${props.hidePanel ? 'u-hide-sidebar' : ''}`}>
        <section className="l-section-bag">
            <MenuSection current={currentOption} onChangeOption={(value) => setCurrentOption(value)} />
            {props.SearchPanel}
        </section>
        <section className="section-workspace">
            <header className="header">
                {props.hidePanel && <AppLogo />}
                <div className="c-account">
                    <img src={session?.photoProfile} alt="x" className="c-account__image" />
                    <nav className="c-account__logout">
                        <div className="c-account__name">{session?.fullName}</div>
                        <ul>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="#">{translate("Logout")} <FontAwesomeIcon icon={faSortDown} /></a>
                                <ul>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li><Link to='/app/profile' >{translate("Profile")}</Link></li>

                                    <li>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a href="" onClick={() => auth.logout().then()}>{translate("CloseSession")}</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {props.ProcessHeader}
            {props.children}
        </section>
    </div>
}