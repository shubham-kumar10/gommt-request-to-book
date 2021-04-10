import React from "react";
import Button from "../button/Button";
import MMTAssured from "../mmt-assured/MMTAssured";
import Rating from "../Rating";
import "./propertycard.module.scss";

function PropertyCard({
  id,
  name,
  location,
  landmark,
  price,
  amenities,
  images,
}) {
  return (
    <div className="card">
      <section className="card__images">
        <figure className="card__images-selected">
          <img src="https://source.unsplash.com/random/218x218" alt="" />
        </figure>
        <figure className="card__images-thumbnails">
          <img src="https://source.unsplash.com/random/50x50" alt="" />
          <img src="https://source.unsplash.com/random/50x50" alt="" />
          <img src="https://source.unsplash.com/random/50x50" alt="" />
          <img src="https://source.unsplash.com/random/50x50" alt="" />
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
          <Rating />
        </section>
        <ul className="card__Details-amenities">
          {amenities.map((amenity) => (
            <li key={amenity.id}>{amenity}</li>
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
