import React, { useContext } from "react";
import { ApplicationContext } from "../../../contexts/App.Context";
import LogoImage from "../../../assets/img/logo.png"

export const LoginHeader: React.FC = () => {
    const { translate } = useContext(ApplicationContext);
    return <div className="login__header">
        <img src={LogoImage}  alt="" className="login__logo" />
        {translate('Front Capture')}
    </div>;
};
