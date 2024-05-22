import { EntityId } from "@reduxjs/toolkit";
import { IOrganization } from "./organizations.ts";
import { IGeoLocation } from "./geo.ts";
import { ICity } from "./city.ts";
import { ISchedule } from "./schedule.ts";

export interface IPlace {
  id: EntityId;
  logoUrl: string;
  title: string;
  description: string;
  isDeliveryAvailable: boolean;
  isInPlaceAvailable: boolean;
  address: string;
  geolocation: IGeoLocation;
  city: ICity;
  schedule: ISchedule[];
  organization: IOrganization;
  deliveryComment: string;
  email: string;
  phone: string;
  contactName: string;
  isActive: boolean;
}
