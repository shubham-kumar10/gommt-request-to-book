const propertyList = [];

export function addProperty(request) {
  request.id = propertyList.length;
  propertyList.push(request);
}

export function deleteProperty(id) {
  propertyList.splice(id, 1);
}

export function editProperty(id, editedProperty) {
  propertyList[id] = editedProperty;
}
