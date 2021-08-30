import React, { useContext, useState } from 'react';
import { ApplicationContext } from '../../contexts/App.Context';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { IFrontCaptureSettings, useAppSetting, useProvideAuth } from '../../hooks';
import { LanguageSelector } from './components/LanguageSelector';
import { LoginHeader } from './components/LoginHeader';
import { useHistory } from 'react-router-dom';


export const Login: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [credentials, setCredentials] = useState({})
    const { translate } = useContext(ApplicationContext)
    const history = useHistory();
    const auth = useProvideAuth();
    const db = useAppSetting();
    const u_settings: IFrontCaptureSettings = {
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

    db.updateSettings(u_settings).then();
    const applyCredentials = (credentials: any) => {
        setCredentials(credentials)
        auth.login(credentials.username, credentials.password)
            .then((t) => {
                history.push("/app");
            })
    }
    console.log(auth.errorMessage)

    return <div>
        <section className="section-login">
            <div>{auth.errorInLogin && translate('InvalidCredentialsError')}</div>
            <div className="login">
                <div className="login__image" />
                <div className="login__content">
                    <LoginHeader />
                    <LanguageSelector />
                    <Form emitCredential={(form) => applyCredentials(form)} />
                </div>
            </div>
            <Footer />
        </section>
    </div>
}


