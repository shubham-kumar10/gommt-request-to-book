import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import '../scss/components/_booking-requests.scss';

function BookingRequests({
  id,
  user,
  property,
  noOfAdults,
  noOfChildren,
  checkIn,
  checkOut,
  duration,
  timestamp,
  message,
  price,
  isPaid,
}) {
  console.log(checkIn);
  const expiryDate = new Date(timestamp.setHours(timestamp.getHours() + 48));
  const formattedExpiryDate = expiryDate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    month: 'short',
    day: 'numeric',
  });
  const headline = `You have a new booking request from ${user.firstname}.
  It will expire by ${formattedExpiryDate}`;
  const checkInDay = new Date(checkIn).toLocaleDateString('default', {
    month: 'short',
    day: 'numeric',
  });
  const checkOutDay = new Date(checkOut).toLocaleDateString('default', {
    month: 'short',
    day: 'numeric',
  });
  const messageHeading = `Message from ${user.firstname}`;
  message = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error perspiciatis obcaecati odio esse quos recusandae, quis, qui nostrum ullam sapiente accusantium et mollitia officiis, pariatur facilis omnis placeat dolores unde?`;
  const routerLinkPath = `/booking?id=${id}`;

  return (
    <div className="bookingRequest">
      <h4 className="color-warn">Request Recieved</h4>
      <p>{headline}</p>
      <div className="bookingRequest__details">
        <div>
          <h5>Dates</h5>
          <p>{`${checkInDay}-${checkOutDay}`}</p>
        </div>
        <div>
          <h5>Guest(s)</h5>
          <p>{noOfAdults + noOfChildren}</p>
        </div>
        <div>
          <h5>Booking Amount</h5>
          <p>&#8377;{price}</p>
        </div>
      </div>
      <div>
        <Banner
          heading={messageHeading}
          text={message}
          bgcolor="light"
          textcolor="dark"
        />
      </div>
      <div className="bookingRequest__footer">
        <Link to={routerLinkPath}>View More Details</Link>
      </div>
    </div>
  );
}

export default BookingRequests;
