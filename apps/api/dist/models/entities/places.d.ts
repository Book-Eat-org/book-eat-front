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
    info: {
        address?: string;
        contactName?: string;
        deliveryInfo?: string;
        email?: string;
        phone?: string;
    };
    isDeliveryAvailable: boolean;
    isInPlaceAvailable: boolean;
    isOnPlaceAvailable: boolean;
    geolocation: IGeoLocation;
    city: ICity;
    schedule: ISchedule[];
    organization: IOrganization;
    organizationId: EntityId;
    deliveryComment: string;
    isActive: boolean;
}
