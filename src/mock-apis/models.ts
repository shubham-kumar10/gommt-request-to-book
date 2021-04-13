export interface BookingRequest {
  id: number;
  user: User;
  property: Property;
  noOfAdults: number;
  noOfChildren: number;
  checkIn: Date;
  checkOut: Date;
  duration: Date;
  timestamp: Date;
  message: string;
  price: number;
  isPaid: boolean;
  isAccepted: boolean;
}

export interface User {
  id: number;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  isHost: boolean;
  hostId?: number;
}

export interface Property {
  id: number;
  name: string;
  location: string;
  landmark: string;
  price: number;
  amenities: Amenity[];
  images: string[];
  rating: number;
  totalRatings: number;
  hostId: number;
}

export interface Amenity {
  id: number;
  icon: string;
  name: string;
}
