import { EntityId } from "@reduxjs/toolkit";
import { IProduct } from "./product.ts";
import { IOrganization, IPlace } from '..';
export declare enum OrderStatus {
    NEW = "NEW",
    ERROR = "ERROR",
    COMPLETED = "COMPLETED",
    IN_PROGRESS = "IN_PROGRESS",
    CANCELLED_BY_CLIENT = "CANCELLED_BY_CLIENT",
    CANCELLED_BY_PROVIDER = "CANCELLED_BY_PROVIDER"
}
export declare enum DeliveryTypeName {
    DELIVERY = "DELIVERY",
    TO_OUTSIDE = "TO_OUTSIDE",
    ON_PLACE = "ON_PLACE"
}
export interface IDeliveryType {
    id: EntityId;
    name: DeliveryTypeName;
}
export interface IOrder {
    id: EntityId;
    comment: string;
    personsCount: number;
    totalCost: number;
    readyTime: string;
    createdAt: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    status: OrderStatus;
    delivery: {
        type: IDeliveryType;
    };
    products: IProduct[];
    paymentUrl: string;
    places: IPlace[];
    organization: IOrganization;
}
