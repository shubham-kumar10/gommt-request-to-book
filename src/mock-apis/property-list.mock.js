const propertyList = [
  {
    id: 0,
    name: "Goa Resort",
    location: "Railway Station",
    landmark: "260m from Railway Station",
    price: 1200,
    amenities: [{ id: 1, name: "Caretacker" }],
    images: [],
    rating: 4.1,
    totalRatings: 345,
    hostId: 0,
  },
  {
    id: 1,
    name: "Sunny Beach Resort",
    location: "Panaji",
    landmark: "100m from Club de Jakos",
    price: 1500,
    amenities: [
      { id: 1, name: "Caretacker" },
      { id: 2, name: "Wi-Fi" },
    ],
    images: [],
    rating: 3.2,
    totalRatings: 564,
    hostId: 0,
  },
];

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

export function getPropertyList() {
  return propertyList;
}
