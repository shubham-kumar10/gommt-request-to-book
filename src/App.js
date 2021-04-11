import "./App.scss";
import Booking from "./components/Booking";
import Header from "./components/Header";
import Login from "./pages/Login";
import PropertyCard from "./components/PropertyCard";
import PropertyList from "./pages/PropertyList";
import Signin from "./pages/Signin";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const property = {
    id: 1,
    name: "Goa Resort",
    location: "Railway Station",
    landmark: "260m from Railway Station",
    price: 1200,
    amenities: [{ id: 1, name: "Caretacker" }],
    images: [],
  };
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" component={PropertyList} exact />
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/signup" component={PropertyList} />
          <Route path="/addProperty" component={PropertyList} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
