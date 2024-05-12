import { EntityId } from "@reduxjs/toolkit";
import { IProduct } from "./product.ts";
import { IPlace } from "$models";

export interface IOrderStatus {
  id: string;
  name: string;
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
  status: IOrderStatus;
  delivery: any;
  products: IProduct[];
  paymentUrl: string;
  places: IPlace[];
}
