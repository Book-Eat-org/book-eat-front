import { TakeUpVariants } from "$enums";

export interface IFormValues {
  name: string;
  phone: string;
  comment: string;
  personsCount: number;
  deliveryType: TakeUpVariants;
  address: string;
  floor: string;
  intercom: string;
  entrance: string;
  apartments: string;
  placeAddress: string;
  takeUpTime: string;
  time: string;
}
