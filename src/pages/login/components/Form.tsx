import React, { useContext, useState } from "react";
import { ApplicationContext } from "../../../contexts/App.Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

/**
 *  Represensts the login form
 * 
*/
export type Credentials = {
    /**
     * The username
     *
     * @type {string}
     */
    username: string;
    /**
     * The password
     *
     * @type {string}
     */
    password: string;
}

/**
 * Represents the properties of the login form
*/
export type IForm = {
    /**
     * callback function for submitting the form data
     *
     * @type {(credentials: Credentials) => void}
     * @memberof IForm
     * @param {Credentials} credentials
     * @returns {void}
     */
    emitCredential: (form: Credentials) => void;
    /**
     * default credentials for login
     *
     * @type {Credentials}
     */
    defaultCredential: Credentials;
}

export const Form: React.FC<IForm> = (props) => {

    const { translate } = useContext(ApplicationContext)
    const [userName, setUserName] = useState(props.defaultCredential.username)
    const [password, setPassword] = useState(props.defaultCredential.password)

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
            <span className="btn-login effect">{translate('Login')}
                <FontAwesomeIcon icon={faAngleRight} />
            </span>
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
