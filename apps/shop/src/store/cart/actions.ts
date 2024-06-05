import { createAction, EntityId } from "@reduxjs/toolkit";

export interface ICartState {
  shopId?: EntityId;
  products: {
    id: EntityId;
    additions: EntityId[];
    col: number;
  }[];
}

export interface IAddProductToCart {
  id: EntityId;
  shopId: EntityId;
  additions: EntityId[];
}

export interface IRemoveProductToCart {
  id: EntityId;
  shopId: EntityId;
}

export const addToCart = createAction<IAddProductToCart>("ADD_TO_CART");
export const removeFromCart =
  createAction<IRemoveProductToCart>("REMOVE_FROM_CART");
