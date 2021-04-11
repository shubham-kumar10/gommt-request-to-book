import "./App.scss";
import Header from "./components/Header";
import PropertyList from "./pages/PropertyList";
import Signin from "./pages/Signin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { useMemo, useState } from "react";
import { userContext } from "./context/UserContext";
import BookProperty from "./pages/BookProperty";
import Signup from "./pages/Signup";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const [user, setUser] = useState(null);
  let query = useQuery();

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <userContext.Provider value={value}>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" component={PropertyList} exact />
          <Route
            path="/signup"
            isHost={query.get("isHost")}
            component={Signup}
          />
          <Route path="/addProperty" component={PropertyList} />
          <Route path="/book" component={BookProperty} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </div>
    </userContext.Provider>
  );
}

export default App;
