import "./App.scss";
import Booking from "./components/Booking";
import Header from "./components/Header";
import Pillbox from "./components/pillbox/Pillbox";
import PropertyCard from "./components/propertycard/PropertyCard";

function App() {
  return (
    <div className="App">
      <Header />
      <PropertyCard />
      <Booking name="John Doe" />
    </div>
  );
}

export default App;
