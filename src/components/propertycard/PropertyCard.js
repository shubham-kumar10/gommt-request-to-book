import React from "react";
import Button from "../button/Button";
import MMTAssured from "../mmt-assured/MMTAssured";
import Rating from "../rating/Rating";
import "./propertycard.module.scss";

function PropertyCard() {
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
            <h3>Goa Resort</h3>
            <small>Near Railwy Station</small>
            <small>260m from Railway Station</small>
          </section>
          <Rating />
        </section>
        <ul className="card__Details-amenities">
          <li>Caretacker</li>
          <li>Wi-Fi</li>
          <li>PArking</li>
        </ul>
        <section className="card__details-price">
          <p>&#8377; 13,700</p>
          <Button color="danger" text="Book Now" />
        </section>
      </section>
    </div>
  );
}

export default PropertyCard;
