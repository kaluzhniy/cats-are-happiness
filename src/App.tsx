import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  return (
    <div className="App">
      {isLoading ? (
        <div>loading...</div>
      ) : (
        isAuthenticated && (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <button
              onClick={() => logout()}
            >
              Log Out
            </button>
          </header>
        )
      )}
    </div>
  );
}

export default App;
