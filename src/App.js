import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import Home from "./components/Home";
import { useUserContext } from "./context/userContext";

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {/* {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>} */}
      {loading ? <h2>Loading...</h2> : <> {user ? <Home /> : <Auth />} </>}
    </div>
  );
}

export default App;
