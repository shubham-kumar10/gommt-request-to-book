import React, { useContext, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { userContext } from "../context/UserContext";
import { getPropertyList } from "../mock-apis/property-list.mock";

function PropertyList() {
  const initialState = getPropertyList();
  const [propertyList] = useState(initialState);
  const { user } = useContext(userContext);
  console.log(user);
  return (
    <div>
      {propertyList.map((property) => (
        <PropertyCard
          key={property.id}
          id={property.id}
          user={property.user}
          name={property.name}
          location={property.location}
          landmark={property.landmark}
          price={property.price}
          amenities={property.amenities}
          images={property.images}
          rating={property.rating}
          totalRatings={property.totalRatings}
        />
      ))}
    </div>
  );
}

export default PropertyList;
