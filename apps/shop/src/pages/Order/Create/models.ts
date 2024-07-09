import { DeliveryTypeName } from "@book-eat/api/src";

export interface IFormValues {
  name: string;
  phone: string;
  email: string;
  comment: string;
  personsCount: number;
  deliveryType: DeliveryTypeName;
  address: string;
  floor: string;
  intercom: string;
  entrance: string;
  apartments: string;
  placeAddress: string;
  takeUpTime: string;
  time: string;
}
