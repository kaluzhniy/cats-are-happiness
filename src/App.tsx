import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Router } from "router";

function App() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  return (
    <div className="App">
      {isLoading ? <div>loading...</div> : isAuthenticated && <Router />}
    </div>
  );
}

export default App;
