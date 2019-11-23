import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Auth0Provider } from "./react-auth0-spa";

const onRedirectCallback = appState => { // Routes the user to the
  window.history.replaceState(           // right place after login
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    client_id={process.env.REACT_APP_AUTH0_CLIENTID}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("gemanepa"));