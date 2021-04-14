const amenities = [
  {
    id: 0,
    icon: 'done',
    name: 'Caretaker',
  },
  {
    id: 1,
    icon: 'wifi',
    name: 'Wi-Fi',
  },
  {
    id: 2,
    icon: 'spa',
    name: 'Spa',
  },
  {
    id: 3,
    icon: 'beach_access',
    name: 'Nearby Beach',
  },
  {
    id: 4,
    icon: 'weekend',
    name: 'Lounge',
  },
  {
    id: 5,
    icon: 'local_parking',
    name: 'Free Parking',
  },
  {
    id: 6,
    icon: 'child_care',
    name: 'Child Care',
  },
];

const propertyType = [
  {
    id: 0,
    color: 'warn',
    name: 'Resort',
  },
  {
    id: 1,
    color: 'primary',
    name: 'Hotel',
  },
  {
    id: 2,
    color: 'danger',
    name: 'Apartment',
  },
  {
    id: 3,
    color: 'success',
    name: 'Villa',
  },
  {
    id: 4,
    color: 'danger',
    name: 'Hostel',
  },
  {
    id: 5,
    color: 'secondary',
    name: 'BnB',
  },
  {
    id: 6,
    color: 'info',
    name: 'Guest House',
  },
];

const propertyList = [
  {
    id: 0,
    name: 'Goa Chills',
    location: 'Railway Station',
    landmark: '260m from Railway Station',
    price: 1200,
    amenities: [amenities[0], amenities[3], amenities[2]],
    images: [
      'https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg',
    ],
    rating: 4.1,
    totalRatings: 345,
    hostId: 0,
    propertyType: propertyType[1],
    discount: 0.1,
  },
  {
    id: 1,
    name: 'Sunny Beach Resort',
    location: 'Panaji',
    landmark: '100m from Club de Jakos',
    price: 1500,
    amenities: [amenities[0], amenities[1], amenities[4]],
    images: [
      'https://cf.bstatic.com/images/hotel/max1024x768/681/68184730.jpg',
    ],
    rating: 3.2,
    totalRatings: 564,
    hostId: 0,
    propertyType: propertyType[0],
    discount: 0.23,
  },
  {
    id: 2,
    name: 'Bed & BreakFast',
    location: 'Panaji',
    landmark: '100m from Air Port',
    price: 800,
    amenities: [amenities[2], amenities[1], amenities[4]],
    images: [
      'https://media.radissonhotels.net/image/radisson-collection-grand-place-brussels/suite/16256-113921-f70897441_3xl.jpg?impolicy=HomeHero',
    ],
    rating: 4,
    totalRatings: 564,
    hostId: 0,
    propertyType: propertyType[5],
    discount: 0,
  },
  {
    id: 3,
    name: 'Hotel New York',
    location: 'Panaji',
    landmark: '100m from Air Port',
    price: 1800,
    amenities: [amenities[1], amenities[4], amenities[5]],
    images: [
      'https://www.eroshotels.co.in/wp-content/uploads/2018/04/Pres.-Suite1.jpg',
    ],
    rating: 4,
    totalRatings: 564,
    hostId: 0,
    propertyType: propertyType[5],
    discount: 0.45,
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
