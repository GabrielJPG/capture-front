import { useState } from 'react';
import { ApplicationContext, IApplicationContext, Session } from './contexts/App.Context';
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
import { useLanguage } from './hooks/language-hook';

function App() {
  const [session, setSession] = useState(null as Session | null);
  const [isAuth, setIsAuth] = useState(false);
  const { translate, setLanguage, language } = useLanguage('es')
  const initialContext: IApplicationContext = {
    language: language,
    session: session,
    isAuth: isAuth,
    translate,
    setLanguage: setLanguage,
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
