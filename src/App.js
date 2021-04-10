import "./App.scss";
import Pillbox from "./components/pillbox/Pillbox";
import PropertyCard from "./components/propertycard/PropertyCard";

function App() {
  return (
    <div className="App">
      <Pillbox type="warn" text="hello" size="small" />
      <Pillbox type="primary" text="hello" size="medium" />
      <Pillbox type="info" text="hello" size="large" />
      <Pillbox type="danger" text="hello" size="small" />
      <Pillbox type="success" text="hello" size="small" />
      <PropertyCard />
    </div>
  );
}

export default App;
