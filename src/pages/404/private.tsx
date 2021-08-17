import React from "react";
import { useLocation } from "react-router-dom";
import LogoImage from '../../assets/img/logo.png';
import { useNotify } from "../../hooks/Notification-hook";

export const NoMatch: React.FC = () => {
    let location = useLocation();
    const toast = useNotify('error');
    toast.show('Error');
    return <div className="process-workspace">
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>
}

export const Procsess404: React.FC = (props) => {
    return <div className="process">
        <span className="logo-container">
            <img src={LogoImage} alt="" className="logo-container__logo" />
            Front Capture
        </span>
    </div>
}

export const ProccessHeader404: React.FC = (props) => {
    return (
        <div className="process-header">
            <div className="process-header--layout__header">

                <h2 className="primary-heading">404</h2>
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