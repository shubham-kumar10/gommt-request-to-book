import React, { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { getPropertyList } from "../mock-apis/property-list.mock";

function PropertyList() {
  const initialState = getPropertyList();
  const [propertyList] = useState(initialState);
  return (
    <div>
      {propertyList.map((property) => (
        <PropertyCard
          id={property.id}
          user={property.user}
          name={property.name}
          location={property.location}
          landmark={property.landmark}
          price={property.price}
          amenities={property.amenities}
          images={[]}
        />
      ))}
    </div>
  );
}

export default PropertyList;
