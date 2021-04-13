import React, { useContext, useState } from 'react';
import { userContext } from '../context/UserContext';
import { getAllBookings } from '../mock-apis/book-request.mock';
import BookingRequests from './BookingRequests';

function BookingList({ id }) {
  const initialState = getAllBookings();
  const [BookingList] = useState(initialState);
  const { user } = useContext(userContext);
  console.log(user);
  return (
    <div>
      {BookingList.map((booking) => (
        <BookingRequests
          id={booking.id}
          user={booking.user}
          property={booking.property}
          noOfAdults={booking.noOfAdults}
          noOfChildren={booking.noOfChildren}
          checkIn={booking.checkIn}
          checkOut={booking.checkOut}
          duration={booking.duration}
          timestamp={booking.timestamp}
          message={booking.message}
          price={booking.price}
          isPaid={booking.isPaid}
        />
      ))}
    </div>
  );
}

export default BookingList;
