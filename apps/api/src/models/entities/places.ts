import { EntityId } from "@reduxjs/toolkit";

interface IWorkingTime {
  dayOfWeek: number;
  timeFrom: string;
  timeTo: string;
}

interface IPlaceSettings {
  deliveryAvailable: boolean;
  onPlaceAvailable: boolean;
  toOutsideAvailable: boolean;
}

export interface IPlace {
  city: { name: string };
  contactName: string;
  address: string;
  enabled: boolean;
  extraContacts: Array<{ title: string; value: string }>;
  infoForCourier: string;
  location: { latitude: number; longitude: number };
  orgId: EntityId;
  phone: string;
  photo: string;
  placeId: EntityId;
  title: string;
  workingTime: IWorkingTime[];
  placeSetting: IPlaceSettings;
}
