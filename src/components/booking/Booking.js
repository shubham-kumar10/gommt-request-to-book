import React from "react";
import Button from "../button/Button";
import "../../scss/components/_booking.scss";
import Pillbox from "../pillbox/Pillbox";

function Booking() {
  return (
    <div className="booking">
      <section className="booking__header">
        <div className="booking__header-icons">
          <Pillbox text="booking request" size="small" type="primary" />
        </div>
        <div className="booking__header-details"></div>
        <div></div>
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
              <td className="text-right bold">Goa Resort</td>
            </tr>
            <tr>
              <td>Check In</td>
              <td className="text-right bold">22 Mar</td>
            </tr>
            <tr>
              <td>Check out</td>
              <td className="text-right bold">31 Mar</td>
            </tr>
            <tr>
              <td>No. of Guest(s)</td>
              <td className="text-right bold">2 Adults</td>
            </tr>
            <tr>
              <td>Stay Duration</td>
              <td className="text-right bold">9 Nights</td>
            </tr>
            <tr>
              <td>Meal Plan</td>
              <td className="text-right bold">None</td>
            </tr>
            <tr>
              <td>Payment Status</td>
              <td className="text-right bold">Paid</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="booking__amount">
        <table>
          <tr>
            <td className="text-left">Booking Amount</td>
            <td className="text-right">13,700</td>
          </tr>
          <tr>
            <td className="text-left">Your Share Of Earnings</td>
            <td className="text-right">400</td>
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
