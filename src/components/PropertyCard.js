import React from "react";
import Button from "./Button";
import MMTAssured from "./MMTAssured";
import Rating from "./Rating";
import "../scss/components/_propertycard.scss";

function PropertyCard({
  id,
  name,
  location,
  landmark,
  price,
  amenities,
  images,
  rating,
  totalRatings,
}) {
  return (
    <div className="card">
      <section className="card__images">
        <figure className="card__images-selected">
          <img
            src="https://source.unsplash.com/random/218x218"
            alt="Random Hotels"
          />
        </figure>
        <figure className="card__images-thumbnails">
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src="https://source.unsplash.com/random/50x50"
              alt="Random Hotels"
            />
          ))}
        </figure>
      </section>
      <section className="card__details">
        <div>
          <MMTAssured />
        </div>
        <section className="card__details-name">
          <section className="card__details-name summary">
            <h3>{name}</h3>
            <small>{location}</small>
            <small>{landmark}</small>
          </section>
          <Rating rating={rating} totalRatings={totalRatings} />
        </section>
        <ul className="card__Details-amenities">
          {amenities.map((amenity) => (
            <li key={amenity.id}>{amenity.name}</li>
          ))}
        </ul>
        <section className="card__details-price">
          <p>&#8377; {price}</p>
          <Button color="danger" text="Book Now" />
        </section>
      </section>
    </div>
  );
}

export default PropertyCard;
