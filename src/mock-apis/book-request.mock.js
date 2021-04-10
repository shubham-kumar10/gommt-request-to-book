const bookRequests = [];

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
