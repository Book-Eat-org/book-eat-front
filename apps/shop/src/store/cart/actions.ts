import { createAction, EntityId } from "@reduxjs/toolkit";

export interface ICartState {
  shopId: EntityId;
  products: {
    id: EntityId;
    additions: EntityId[];
    col: number;
  }[];
}
export interface ICartPayload {
  productId: EntityId;
  shopId: EntityId;
  col: number;
}
export const addToCart = createAction<ICartPayload>("ADD_TO_CART");
