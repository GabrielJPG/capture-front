import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ApplicationContext } from "../../contexts/App.Context";
import { useNotify } from "../../hooks/Notification-hook";
import { AppLogo } from "../../shared/logo/app-logo";

export const NoMatch: React.FC = () => {
    let location = useLocation();
    const { translate } = useContext(ApplicationContext);
    const toast = useNotify('error');
    toast.show(translate('RouteNotFound'));
    return <div className="process-workspace">
        <h3>
            {translate("NotMatch")}<code>{location.pathname}</code>
        </h3>
    </div>
}

export const Procsess404: React.FC = (props) => {
    return <div className="process">
        <AppLogo />
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