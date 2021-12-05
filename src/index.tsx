import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from "config";
import store, { StoreContext } from "common/store";
import { muiTheme } from "theme/muiTheme";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <StoreContext.Provider value={store}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline enableColorScheme />
          <App />
        </ThemeProvider>
      </StoreContext.Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
