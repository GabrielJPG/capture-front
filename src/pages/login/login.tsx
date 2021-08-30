import React, { useContext, useState } from 'react';
import { ApplicationContext } from '../../contexts/App.Context';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { IFrontCaptureSettings, useAppSetting, useProvideAuth } from '../../hooks';
import { LanguageSelector } from './components/LanguageSelector';
import { LoginHeader } from './components/LoginHeader';
import { useHistory } from 'react-router-dom';


export const Login: React.FC = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    })
    const { translate } = useContext(ApplicationContext)
    const history = useHistory();
    const auth = useProvideAuth();
    const db = useAppSetting();
    const app_settings: IFrontCaptureSettings = {
        type: 'fluency',
        settings: {
            siteUrl: 'http://localhost:47726',
            coordinatorUrl: 'http://localhost:4000',
            username: 'manager',
            password: 'password',
            apiKey: 'a3001bd6-6b95-4e8b-84d7-8a03b9873a86',
            apiKeyName: 'x-api-key',
            useLoggedUseCredentials: false,
        }
    }

    db.updateSettings(app_settings).then();
    const applyCredentials = (credentials: any) => {
        setCredentials(credentials)
        auth.login(credentials.username, credentials.password)
            .then(() => {
                history.push("/app");
            })
    }

    return <div>
        <section className="section-login">
            {/* La linea debajo es para el error del las credenciales */}
            <div>{auth.errorInLogin && translate('InvalidCredentialsError')}</div>
            <div className="login">
                <div className="login__image" />
                <div className="login__content">
                    <LoginHeader />
                    <LanguageSelector />
                    <Form defaultCredential={credentials} emitCredential={(form) => applyCredentials(form)} />
                </div>
            </div>
            <Footer />
        </section>
    </div>
}


