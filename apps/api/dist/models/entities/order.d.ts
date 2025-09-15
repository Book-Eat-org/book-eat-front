import { EntityId } from "@reduxjs/toolkit";
import { IProduct } from "./product.ts";
import { IOrganization, IPlace } from '..';
export declare enum OrderStatus {
    NEW = "NEW",
    PAID = "PAID",
    IN_PROGRESS = "IN_PROGRESS",
    CANCELLED_BY_CLIENT = "CANCELLED_BY_CLIENT",
    CANCELLED_BY_PROVIDER = "CANCELLED_BY_PROVIDER",
    ERROR = "ERROR",
    COMPLETED = "COMPLETED"
}
export declare enum DeliveryTypeName {
    DELIVERY = "DELIVERY",
    TO_OUTSIDE = "TO_OUTSIDE",
    ON_PLACE = "ON_PLACE"
}
export interface IOrder {
    id: EntityId;
    comment: string;
    personsCount: number;
    promoCodeDiscount?: number;
    totalCost: number;
    totalCostWithoutPromoCode?: number;
    readyTime?: string;
    orderNumber: number;
    createdAt: string;
    creationTime: string;
    customerInfo: {
        customerName: string;
        customerPhone: string;
    };
    status: OrderStatus;
    delivery: {
        type: DeliveryTypeName;
        address: string;
        courier: {
            name: string;
            car: string;
            carNumber: string;
        };
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
    places: IPlace;
    organization: IOrganization;
    clientLegalInfo: {
        isAgree: boolean;
        version: string;
        ip?: string;
    };
}
