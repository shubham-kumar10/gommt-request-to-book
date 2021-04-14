import React, { useState } from 'react';
import Button from './Button';
import '../scss/components/_booking.scss';
import Pillbox from './Pillbox';
import Tag from './Tag';
import Banner from './Banner';
import { getBookingById } from '../mock-apis/book-request.mock';

function Booking({ id }) {
  const initialState = getBookingById(id);
  const [booking] = useState(initialState);

  return (
    <div className="booking">
      <section className="booking__header">
        <div className="booking__header-icons">
          <Pillbox text="booking request" size="small" type="primary" />
          <Tag
            text="Expires in 12 hours"
            startIcon="timer"
            size="x-small"
            color="danger"
          />
        </div>
        <div className="booking__header-details">
          {booking.user.name}
          <Tag
            text="MMTBLACK"
            startIcon="assistant"
            endIcon="info"
            size="x-small"
            color="dark"
          />
        </div>
        <div>
          <Banner
            icon="info"
            bgcolor="dark"
            text="MMT premium member he is has been rated GOOD by 21 Hosts."
          />
        </div>
      </section>
      <section className="booking__details">
        <table>
          <thead>
            <tr>
              <th className="text-left">Booking Request Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Property Name</td>
              <td className="text-right bold">{booking.property.name}</td>
            </tr>
            <tr>
              <td>Check In</td>
              <td className="text-right bold">{booking.checkIn}</td>
            </tr>
            <tr>
              <td>Check out</td>
              <td className="text-right bold">{booking.checkOut}</td>
            </tr>
            <tr>
              <td>No. of Guest(s)</td>
              <td className="text-right bold">
                {booking.noOfGuests.adults},
                {booking.noOfGuests.children > 0 &&
                  `${booking.noOfGuests.children} Children`}
              </td>
            </tr>
            <tr>
              <td>Stay Duration</td>
              <td className="text-right bold">{booking.duration}Nights</td>
            </tr>
            <tr>
              <td>Meal Plan</td>
              <td className="text-right bold">None</td>
            </tr>
            <tr>
              <td>Payment Status</td>
              {booking.isPaid && <td className="text-right bold">Paid</td>}
            </tr>
          </tbody>
        </table>
      </section>
      <section className="booking__amount">
        <table>
          <tr>
            <td className="text-left">Booking Amount</td>
            <td className="text-right">{booking.price}</td>
          </tr>
          <tr>
            <td className="text-left">Your Share Of Earnings</td>
            <td className="text-right">{0.13 * booking.price}</td>
          </tr>
        </table>
      </section>
      <section className="booking__footer">
        <p>Special Request</p>
        <small>Early checkin</small>
        <div className="booking__footer-buttons">
          <Button text="Decline" variant="outline" />
          <Button text="Approve" color="primary" />
        </div>
      </section>
    </div>
  );
}

export default Booking;
