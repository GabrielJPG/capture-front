import i18n from './translation/i18n';
import React, { useState } from 'react';
import { ApplicationContext, IApplicationContext, Session } from './contexts/App.Context';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/login';
import { NoMatchPublic } from './pages/404/public';
import './assets/sass/style.scss';
import {
  BrowserRouter as Router
  , Switch
  , Route
} from 'react-router-dom';

function App() {
  const [lang, setLang] = useState('es');
  const [session, setSession] = useState(null as Session | null);
  const [isAuth, setIsAuth] = useState(false);
  const translate = (key: string) => i18n.t(key)
  const initialContext: IApplicationContext = {
    translate,
    language: lang,
    setLanguage: setLang,
    session: session,
    setSession: setSession,
    isAuth: isAuth,
    setIsAuth: setIsAuth
  }
  i18n.changeLanguage(lang)
  return (
    <ApplicationContext.Provider value={initialContext}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/app" component={Home} />
          <Route path="/*" component={NoMatchPublic} />
        </Switch>
      </Router>
    </ApplicationContext.Provider>
  );
}
export default App;
