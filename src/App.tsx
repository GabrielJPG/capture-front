import React, { useState } from 'react';
import './assets/sass/style.scss';
import { ApplicationContext, IApplicationContext } from './contexts/App.Context';
import { Login } from './pages/login/login';
import { Home } from './pages/home/Home';
import {
  BrowserRouter as Router
  , Switch
  , Route
  , Link
} from 'react-router-dom';
import i18n from './translation/i18n';

function App() {
  const [lang, setLang] = useState('es');
  const translate = (key: string) => i18n.t(key)
  const initialContext: IApplicationContext = {
    translate,
    language: lang,
    setLanguage: setLang
  }
  i18n.changeLanguage(lang)
  return (
    <ApplicationContext.Provider value={initialContext}>
      {/* <Login /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </ApplicationContext.Provider>
  );
}

export default App;
