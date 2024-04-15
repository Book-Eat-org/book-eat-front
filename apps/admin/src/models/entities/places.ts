import { EntityId } from "@reduxjs/toolkit";
import { IGeoLocation } from "./location.ts";

interface IWorkingTime {
  dayOfWeek: number;
  timeFrom: string;
  timeTo: string;
}

export interface IPlaceSettings {
  deliveryAvailable: boolean;
  onPlaceAvailable: boolean;
  toOutsideAvailable: boolean;
}

export interface IPlace {
  title: string;
  logoUrl: string;
  description: string;
  isDeliveryAvailable: boolean;
  isInPlaceAvailable: boolean;
  geolocation: IGeoLocation;
  city: { name: string };
  contactName: string;
  address: string;
  enabled: boolean;
  extraContacts: Array<{ title: string; value: string }>;
  infoForCourier: string;
  orgId: EntityId;
  phone: string;
  placeId: EntityId;
  workingTime: IWorkingTime[];
}
