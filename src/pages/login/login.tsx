import React, { useContext } from "react"
import { ApplicationContext } from "../../contexts/App.Context"
import { Footer } from "./components/Footer"
import { Form } from "./components/Form"
import { LanguageSelector } from "./components/LanguageSelector"
import { LoginHeader } from "./components/LoginHeader"

export const Login: React.FC = () => {
    const [credentials, setCredentials] = React.useState({})

    const applyCredentials = (credentials: any) => {
        setCredentials(credentials)
        //const { onLogin } = useContext(ApplicationContext)
        //onLogin(credentials)
    }

    return <div>
        <section className="section-login">
            <div className="login">
                <div className="login__image" />
                <div className="login__content">
                    <LoginHeader />
                    <LanguageSelector />
                    <Form emitCredential={(form) => setCredentials(form)} />
                </div>
            </div>
            <Footer />
        </section>
    </div>
}


