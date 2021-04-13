import { BookingRequest, Property, User } from './models';

const bookRequests: BookingRequest[] = [];
let selectedProperty: Property, selectedUser: User;

export function addBookingRequest(request: BookingRequest) {
  request.id = bookRequests.length;
  bookRequests.push(request);
  console.log(bookRequests);
}

export function getBookingById(id: number) {
  return bookRequests[id];
}

export function getAllBookings() {
  return bookRequests;
}

export function deleteBookingRequest(id: number) {
  bookRequests.splice(id, 1);
}

export function handleBookingRequest(id: number, action: boolean) {
  bookRequests[id].isAccepted = action;
}

export function setProperty(property: Property) {
  selectedProperty = property;
}

export function getSelectedProperty() {
  return selectedProperty;
}

export function setUser(property: Property) {
  selectedProperty = property;
}

export function getUser() {
  return selectedUser;
}
