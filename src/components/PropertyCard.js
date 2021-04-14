import React from 'react';
import Button from './Button';
import MMTAssured from './MMTAssured';
import Rating from './Rating';
import Pillbox from './Pillbox';
import '../scss/components/_propertycard.scss';
import { useHistory } from 'react-router';
import { setProperty } from '../mock-apis/book-request.mock';

function PropertyCard({
  id,
  name,
  location,
  landmark,
  price,
  amenities,
  images,
  rating,
  propertyType,
  discount,
  totalRatings,
}) {
  const history = useHistory();

  function handleBooking(event) {
    setProperty({
      id,
      name,
      location,
      landmark,
      price,
      amenities,
      images,
      rating,
      propertyType,
      totalRatings,
      discount,
    });
    history.push('/book');
  }

  function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
      maximumSignificantDigits: 3,
    }).format(price);
  }
  return (
    <div className="card">
      <section className="card__left">
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
          <div className="card__details-info">
            <Pillbox
              text={propertyType.name}
              type={propertyType.color}
              size="small"
            />
            <MMTAssured />
          </div>
          <section className="card__details-name">
            <section className="card__details-name summary">
              <h2>{name}</h2>
              <small>{location}</small>
              <small>{landmark}</small>
            </section>
            <Rating rating={rating} totalRatings={totalRatings} />
          </section>
          <ul className="card__details-amenities">
            {amenities.map((amenity) => (
              <li key={amenity.id}>
                <i className="material-icons">{amenity.icon}</i>
                {amenity.name}
              </li>
            ))}
          </ul>
        </section>
      </section>

      <section className="card__right">
        <div className="card__right-price">
          {discount && (
            <p className="card__right-save color-danger">
              <Pillbox
                text={`${discount * 100} %`}
                bgcolor="danger"
                size="small"
                type="light"
              />
              Save &#8377; {formatPrice(discount * price)}
            </p>
          )}
          {discount ? (
            <p className="card__right-costprice">
              &#8377; {formatPrice(price - discount * price)}
            </p>
          ) : (
            <p className="color-danger small">No Discount</p>
          )}
          <p className="card__right-sellprice">&#8377; {formatPrice(price)}</p>
          <small className="card__right-tax">
            {` + `}&#8377;{formatPrice(0.18 * price)}
            {` taxes & fees`}
          </small>
          <p className="margin-0 color-gray small">Per Night</p>
        </div>
        <Button color="danger" text="Book Now" onClick={handleBooking} />
      </section>
    </div>
  );
}

export default PropertyCard;
