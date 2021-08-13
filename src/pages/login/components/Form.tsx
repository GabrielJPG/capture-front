import React, { useContext, useState } from "react";
import { ApplicationContext } from "../../../contexts/App.Context";

export type Credentials = {
    username: string;
    password: string;
}

export const Form: React.FC<{ emitCredential: (form: Credentials) => void }> = (props) => {

    const { translate } = useContext(ApplicationContext)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const buildCredentials = () => {
        return {
            username: userName,
            password: password
        } as Credentials
    }

    return <div className="login__container">
        <GroupLoginField label={translate('Username')} value={userName} labelHolder={translate('Username')} onchange={(value) => setUserName(value)} />
        <GroupLoginField label={translate('Password')} value={password} labelHolder={translate('Password')} onchange={(value) => setPassword(value)} />

        <label className="login__label">
            {translate('PasswordRecovery')}
        </label>

        <div className="login__btn" onClick={() => props.emitCredential(buildCredentials())}>
            <span className="btn-login effect">{translate('Login')}</span>
        </div>
    </div>;
};

const GroupLoginField: React.FC<{ label: string, labelHolder: string, value: string, onchange: (value: string) => void, required?: boolean }> = (props) => {
    return <div className="form-group field">
        <input type="input" className="form-group__field" onChange={(e) => props.onchange(e.target.value)} placeholder={props.labelHolder} name={props.label} id={props.label}
            required={!props.required ? false : true} />
        <label className="form-group__label">{props.label}</label>
    </div>
}
