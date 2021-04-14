import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../components/Button';
import Input from '../components/Input';
import { userContext } from '../context/UserContext';
import {
  addBookingRequest,
  getSelectedProperty,
} from '../mock-apis/book-request.mock';

function BookProperty() {
  const context = useContext(userContext);
  const property = getSelectedProperty();
  const [booking, setBooking] = useState({
    id: '',
    user: context.user,
    property: property,
    noOfAdults: 0,
    noOfChildren: 0,
    checkIn: '',
    checkOut: '',
    duration: '',
    timestamp: new Date(),
    price: property.price,
    isPaid: false,
  });

  const history = useHistory();
  if (!context.user) {
    history.push('/signin');
  }

  function handleInputChange(event) {
    const labelName = event.target.name;
    const value = event.target.value;
    setBooking({ ...booking, [labelName]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const duration = calculateNoOfDays(
      new Date(booking.checkOut),
      new Date(booking.checkIn)
    );
    booking.duration = duration;
    addBookingRequest(booking);
    history.push('/');
  }

  function calculateNoOfDays(date2, date1) {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffTime + ' milliseconds');
    console.log(diffDays + ' days');
    return diffDays;
  }

  function setTargetDate() {
    var checkInDate = new Date(booking.checkIn).toISOString().split('T')[0];
    document.getElementsByName('checkOut')[0].setAttribute('min', checkInDate);
  }

  return (
    <div className="form">
      <h3>Booking Details</h3>
      <form>
        <Input
          label="Check In"
          type="date"
          name="checkIn"
          min={new Date().toISOString().split('T')[0]}
          shrink={true}
          value={booking.checkIn}
          handleChange={handleInputChange}
        />
        <Input
          label="Check Out"
          type="date"
          onClick={setTargetDate}
          name="checkOut"
          shrink={true}
          value={booking.checkOut}
          handleChange={handleInputChange}
        />
        <Input
          label="No. of Adults"
          type="number"
          name="noOfAdults"
          shrink={true}
          value={booking.noOfAdults}
          handleChange={handleInputChange}
        />
        <Input
          label="No. of Children"
          type="number"
          name="noOfChildren"
          shrink={true}
          value={booking.noOfChildren}
          handleChange={handleInputChange}
        />
      </form>
      <Button
        onClick={handleSubmit}
        text="Confirm Booking"
        color="primary"
        size="lg"
      />
    </div>
  );
}

export default BookProperty;
