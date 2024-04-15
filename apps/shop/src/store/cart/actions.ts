import { createAction, EntityId } from "@reduxjs/toolkit";

export interface ICartPayload {
  productId: EntityId;
  shopId: EntityId;
  col: number;
}
export const addToCart = createAction<ICartPayload>("ADD_TO_CART");
