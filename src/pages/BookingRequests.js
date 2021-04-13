import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

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
  const expiryDate = timestamp.setHours(timestamp.getHours() + 48);
  const formattedExpiryDate = expiryDate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    month: 'short',
    day: 'numeric',
  });
  const headline = `You have a new booking request from ${user.firstname}.
  It will expire by ${formattedExpiryDate}`;
  const messageHeading = `Message from ${user.firstname}`;
  const routerLinkPath = `/booking?id=${id}`;
  return (
    <div className="bookingRequest">
      <h6>Request Recieved</h6>
      <p>{headline}</p>
      <div className="bookingRequest__details">
        <div>
          <h6>Dates</h6>
          <p></p>
        </div>
        <div>
          <h6>Guest(s)</h6>
          <p>{noOfAdults + noOfChildren}</p>
        </div>
        <div>
          <h6>Booking Amount</h6>
          <p>&#8377;{price}</p>
        </div>
      </div>
      <div>
        <Banner heading={messageHeading} text={message} bgcolor="light" />
      </div>
      <div>
        <Link to={routerLinkPath}>View More Details</Link>
      </div>
    </div>
  );
}

export default BookingRequests;
