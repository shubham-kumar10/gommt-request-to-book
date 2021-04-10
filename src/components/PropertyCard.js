import React from "react";
import Button from "./Button";
import MMTAssured from "./MMTAssured";
import Rating from "./Rating";
import "../scss/components/_propertycard.scss";
import { addBookingRequest } from "../mock-apis/book-request.mock";

function PropertyCard({
  id,
  name,
  location,
  landmark,
  price,
  amenities,
  images,
}) {
  function addNewBooking() {
    addBookingRequest();
  }
  return (
    <div className="card">
      <section className="card__images">
        <figure className="card__images-selected">
          {images.length > 0 && (
            <img src={images[0].url} alt={images[0].desc} />
          )}
        </figure>
        <figure className="card__images-thumbnails">
          {images.length > 0 &&
            images.map((image) => <img src={image.url} alt={image.desc} />)}
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
