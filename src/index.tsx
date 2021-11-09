import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import {AUTH0_CLIENT_ID, AUTH0_DOMAIN} from 'config'


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
