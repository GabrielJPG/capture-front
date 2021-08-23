import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const disableReactDevTools = (): void => {
//   const noop = (): void => undefined;
//   const DEV_TOOLS = (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__;

//   if (typeof DEV_TOOLS === 'object') {
//     for (const [key, value] of Object.entries(DEV_TOOLS)) {
//       DEV_TOOLS[key] = typeof value === 'function' ? noop : null;
//     }
//   }
// };

// disableReactDevTools();
