import "./App.scss";
import Header from "./components/Header";
import PropertyList from "./pages/PropertyList";
import Signin from "./pages/Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" component={PropertyList} exact />
          <Route path="/signup" component={PropertyList} />
          <Route path="/addProperty" component={PropertyList} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
