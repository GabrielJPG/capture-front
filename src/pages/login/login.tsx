/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { LanguageSelector } from './components/LanguageSelector';
import { LoginHeader } from './components/LoginHeader';
import { useHistory } from 'react-router-dom';
import { useAppSetting, useNotify, useProvideAuth, IFrontCaptureSettings } from '../../hooks';
import { useState } from 'react';
import { useEffect } from 'react';

export const Login: React.FC = () => {
    const [credentials, setCredentials] = React.useState({})
    const notify = useNotify('error')
    const history = useHistory();
    const auth = useProvideAuth();
    const db = useAppSetting();
    const [notification, setNotification] = useState(false);
    const u_settings: IFrontCaptureSettings = {
        type: 'fluency',
        settings: {
            siteUrl: 'http://18.218.98.135/site',
            username: 'manager',
            password: 'password',
            apiKey: 'd8092a8b-15a6-4f8e-87de-c582aa6445f9',
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
                if (JSON.stringify(t) !== '{}' && t !== undefined) {
                    history.push("/app");
                    return;
                }
                setNotification(true);
            })
    }

    return <div>
        <section className="section-login">
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


