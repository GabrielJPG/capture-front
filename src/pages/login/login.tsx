import React from "react"
import { Footer } from "./components/Footer"
import { Form } from "./components/Form"
import { LanguageSelector } from "./components/LanguageSelector"
import { LoginHeader } from "./components/LoginHeader"
import { useHistory } from "react-router-dom";

export const Login: React.FC = () => {
    const [credentials, setCredentials] = React.useState({})
    const history = useHistory();
    console.log(credentials);

    const applyCredentials = (credentials: any) => {
        setCredentials(credentials)
        history.push("/app")
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


