import React from 'react';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import {
    IFrontCaptureSettings,
    useAppSetting,
    useProvideAuth
} from '../../hooks';
import { LanguageSelector } from './components/LanguageSelector';
import { LoginHeader } from './components/LoginHeader';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


export const Login: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [credentials, setCredentials] = useState({})
    const [notification, setNotification] = useState(false)
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
                ;
                if (JSON.stringify(t) !== '{}') {
                    history.push("/app");
                    return;
                }
                setNotification(true);
            })
    }

    return <div>
        <section className="section-login">
            <div className="login">
                <div>{notification ? 'CredentialsError' : ''}</div>
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


