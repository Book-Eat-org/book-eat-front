import { createAction, EntityId } from "@reduxjs/toolkit";

export interface ICartState {
  shopId?: EntityId;
  promoCodeId?: EntityId;
  items: Record<
    EntityId,
    {
      productId: EntityId;
      additions: {
        id: EntityId;
        col: number;
      }[];
      col: number;
    }
  >;
}

export interface IAddProductToCartNew {
  shopId: EntityId;
  productId: EntityId;
  additions: {
    id: EntityId;
    col: number;
  }[];
  col?: number;
}

export const addToCartNew = createAction<IAddProductToCartNew>("ADD_TO_CART");
export const clearCart = createAction("CLEAR_CART");
export const removeFromCart = createAction<EntityId>("REMOVE_FROM_CART");

export const incrementCart = createAction<EntityId>("INCREMENT_CART");

export const decrementCart = createAction<EntityId>("DECREMENT_CART");
export const addPromoCodeAction = createAction<EntityId>("ADD_PROMO_CODE");
