import React, { useContext } from "react";
import { ApplicationContext } from "../../../contexts/App.Context";

export const LoginHeader: React.FC = () => {
    const { translate } = useContext(ApplicationContext);
    return <div className="login__header">
        <img src="img/logo.png" alt="" className="login__logo" />
        {translate('Front Capture')}
    </div>;
};
