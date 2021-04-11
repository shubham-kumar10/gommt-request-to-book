const bookRequests = [];
let selectedProperty, selectedUser;

export function addBookingRequest(request) {
  request.id = bookRequests.length;
  bookRequests.push(request);
}

export function deleteBookingRequest(id) {
  bookRequests.splice(id, 1);
}

export function handleBookingRequest(id, action) {
  bookRequests[id].isAccepted = action;
}

export function setProperty(property) {
  selectedProperty = property;
}

export function getSelectedProperty() {
  return selectedProperty;
}

export function setUser(property) {
  selectedProperty = property;
}

export function getUser() {
  return selectedUser;
}
