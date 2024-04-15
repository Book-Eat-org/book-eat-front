import { ApiDate, IPlace, Maybe } from "$models";
import { EntityId } from "@reduxjs/toolkit";
import { OrdersIssuingMode, OrderStatus } from "$enums";

interface IAddition {
  id: number;
  price: number;
  title: string;
}
interface IBankOrderStatus {
  id: EntityId;
  description: string;
}

export interface IItem {
  additionsList: IAddition[];
  company_id: string;
  description: string;
  discount: number;
  enabled: boolean;
  group_id: string[];
  guid: string;
  inStock: number[];
  measure: "гр" | "кг" | "л";
  orderAmount: number;
  placeId: number;
  previewImage: string;
  price: string;
  quantity: number;
  title: string;
}
export interface IOrder {
  id: EntityId;
  additions: Maybe<string[]>;
  bankOrderId: EntityId;
  bankOrderStatus: IBankOrderStatus;
  comment: string;
  courierInfo: Maybe<unknown>;
  creationDate: ApiDate;
  deliveryAddress: Maybe<string>;
  deliveryCost: Maybe<number>;
  deliveryDateFrom: Maybe<ApiDate>;
  deliveryDateTo: Maybe<ApiDate>;
  deliveryStatus: Maybe<string>;
  email: string;
  fromDevice: Maybe<unknown>;
  name: string;
  orderItems: Maybe<unknown[]>;
  orderStatus: OrderStatus;
  orderType: OrdersIssuingMode;
  persons: number;
  phone: string;
  pickupCode: Maybe<unknown>;
  place: Maybe<IPlace>;
  placeId: EntityId;
  price: number;
  readyTime: ApiDate;
  toOutside: boolean;
  trackingUrl: Maybe<string>;
  items?: IItem[];
}
