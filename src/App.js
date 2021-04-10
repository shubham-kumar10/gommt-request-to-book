import "./App.scss";
import Booking from "./components/Booking";
import Header from "./components/Header";
import PropertyCard from "./components/PropertyCard";
import PropertyList from "./pages/PropertyList";

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
    <div className="App">
      <Header />
      {/* <PropertyCard
        id="1"
        user={{ id: 1, name: "JOhn" }}
        name="Goa Resort"
        location="Railway Station"
        landmark="260m from Railway Station"
        price="1200"
        amenities={[{ id: 1, name: "Caretacker" }]}
      /> */}
      {/* <Booking name="John Doe" /> */}
      <PropertyList />
    </div>
  );
}

export default App;
