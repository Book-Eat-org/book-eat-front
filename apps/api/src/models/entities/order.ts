import { EntityId } from "@reduxjs/toolkit";
import { IProduct } from "./product.ts";
import { IOrganization, IPlace } from "$models";

export enum OrderStatus {
  NEW = "NEW",
  ERROR = "ERROR",
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS",
  CANCELLED_BY_CLIENT = "CANCELLED_BY_CLIENT",
  CANCELLED_BY_PROVIDER = "CANCELLED_BY_PROVIDER",
}

export enum DeliveryTypeName {
  DELIVERY = "DELIVERY",
  TO_OUTSIDE = "TO_OUTSIDE",
  ON_PLACE = "ON_PLACE",
}

export interface IOrder {
  id: EntityId;
  comment: string;
  personsCount: number;
  totalCost: number;
  readyTime: string;
  createdAt: string;
  customerInfo: {
    customerName: string;
    customerEmail: string;
    customerPhone: string;
  };
  status: OrderStatus;
  delivery: {
    type: DeliveryTypeName;
    address: string;
    courier: { name: string; car: string; carNumber: string };
    doorCode: string;
    externalId: EntityId;
    flat: string;
    floor: string;
    id: EntityId;
    pickupCode: string;
    porch: string;
    price: number;
    status: null;
    trackingUrl: string;
  };
  products: IProduct[];
  paymentUrl: string;
  places: IPlace[];
  organization: IOrganization;
}
