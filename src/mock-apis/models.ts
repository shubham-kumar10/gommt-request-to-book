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

export interface User {}

export interface Property {}
