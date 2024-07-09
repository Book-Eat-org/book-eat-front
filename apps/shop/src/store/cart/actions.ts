import { createAction, EntityId } from "@reduxjs/toolkit";

export interface ICartState {
  shopId?: EntityId;
  items: Record<
    EntityId,
    {
      productId: EntityId;
      additionIds: EntityId[];
      col: number;
    }
  >;
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

export interface IAddProductToCartNew {
  shopId: EntityId;
  productId: EntityId;
  additionIds: EntityId[];
  col?: number;
}

export interface IRemoveProductToCart {
  id: EntityId;
  shopId: EntityId;
}

export const addToCart = createAction<IAddProductToCart>("ADD_TO_CART");
export const addToCartNew = createAction<IAddProductToCartNew>("ADD_TO_CART");
export const removeFromCart =
  createAction<IRemoveProductToCart>("REMOVE_FROM_CART");
