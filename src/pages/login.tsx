import React from "react"

export const Login: React.FC = () => {
    return <div>
        <section className="section-login">
            <div className="login">
                <div className="login__image" />
                <div className="login__content">
                    <LoginHeader />
                    <LanguageSelector />
                    <Form />
                </div>
            </div>
            <Footer />
        </section>
    </div>
}

const LanguageSelector: React.FC = () => {
    return <div className="language">
        <div className="language__flag">
            <img src="img/spain-flag.jpg" alt="" />
        </div>

        <span className="language__dropdown">
            <button>Español</button>
            <label>
                <input type="checkbox" />
                <ul>
                    <li>
                        <div className="language__flag">
                            <img src="img/usa-flag.jpg" alt="" />
                        </div>
                        Ingles
                    </li>
                    <li>
                        <div className="language__flag">
                            <img src="img/france-flag.jpg" alt="" />
                        </div>
                        Frances
                    </li>
                    <li>
                        <div className="language__flag">
                            <img src="img/spain-flag.jpg" alt="" />
                        </div>
                        Portugues
                    </li>
                </ul>
            </label>
        </span>
    </div>
}

const Form: React.FC = () => {
    return <form action="" className="login__container">
        <div className="form-group field mt-0">
            <input type="input" className="form-group__field" placeholder="Name" name="name" id='name'
                required />
            <label className="form-group__label">Usuario</label>
        </div>
        <div className="form-group field">
            <input type="password" className="form-group__field" placeholder="Contraseña" name="password"
                id='password' required />
            <label className="form-group__label">Contraseña</label>
        </div>

        <label className="login__label">
            ¿Olvidó su contraseña?
        </label>

        <div className="login__btn">
            <a className="btn-login effect" href="index.html">Entrar</a>
        </div>
    </form>
}

const Footer: React.FC = () => {
    return <div className="login__footer">
        Versión BETA 0.1
    </div>
}

const LoginHeader: React.FC = () => {
    return <div className="login__header">
        <img src="img/logo.png" alt="" className="login__logo" />
        Front Capture
    </div>
}