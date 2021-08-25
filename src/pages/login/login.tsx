import React from 'react';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { LanguageSelector } from './components/LanguageSelector';
import { LoginHeader } from './components/LoginHeader';
import { useHistory } from 'react-router-dom';
import { useProvideAuth } from '../../hooks/Auth-hooks';

export const Login: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [credentials, setCredentials] = React.useState({})
    const history = useHistory();
    const auth = useProvideAuth();

    const applyCredentials = (credentials: any) => {
        setCredentials(credentials)
        auth.login(credentials.username, credentials.password).then(() => {
            history.push("/app");
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


