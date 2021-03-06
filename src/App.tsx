import { useState } from 'react';
import { ApplicationContext, IApplicationContext } from './contexts/App.Context';
import { Home } from './pages/app';
import { Login } from './pages/login/login';
import { NoMatchPublic } from './pages/404/public';
import './assets/sass/style.scss';
import {
  BrowserRouter as Router
  , Switch
  , Route
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ILanguageHook, useLanguage, useLocalStorage } from './hooks';
import { Session } from 'inspector';

function App() {
  const localSession = useLocalStorage<Session>('user-session', {} as any);
  const sessionAuth = useLocalStorage<boolean>('session-auth', false);
  const [currentSession, setSession] = useState(localSession.value as any);
  const [currentIsAuth, setIsAuth] = useState(sessionAuth.value);
  const hookTranslate: ILanguageHook = useLanguage('es')
  const initialContext: IApplicationContext = {
    language: hookTranslate.language,
    session: currentSession,
    isAuth: currentIsAuth,
    translate: hookTranslate.translate,
    setLanguage: hookTranslate.setLanguage,
    setSession: setSession,
    setIsAuth: setIsAuth
  }
  return (<div>
    <ApplicationContext.Provider value={initialContext}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/app" component={Home} />
          <Route path="*" component={NoMatchPublic} />
        </Switch>
      </Router>
    </ApplicationContext.Provider>
    <ToastContainer />
  </div>
  );
}
export default App;
