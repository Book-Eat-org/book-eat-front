import { createSelector, EntityId } from "@reduxjs/toolkit";
import { IRootState } from "../store";
import { isNil, isNotNil, keys, values } from "ramda";
import { IAddition, IProduct } from "@book-eat/api";
import { getPriceWithDiscount } from "@book-eat/utils";
import { promoCodesSelectors } from "../store/entities";

const productsEntitiesSelector = (state: IRootState) => state.products;
const additionsEntitiesSelector = (state: IRootState) => state.additions;
const cartSelector = (state: IRootState) => state.cart;

export const cartItemsSelector = createSelector(
  cartSelector,
  productsEntitiesSelector,
  additionsEntitiesSelector,
  (cart, products, additionsStore) =>
    keys(cart.items).reduce(
      (acc, curr) => {
        const item = cart.items[curr];

        const product = products.entities[item.productId] as IProduct;

        const additions =
          item?.additions?.map((addition) => ({
            ...additionsStore.entities[addition.id]!,
            ...addition,
          })) ?? [];

        return {
          ...acc,
          [curr]: {
            product,
            additions: additions.filter(isNotNil),
            col: item.col,
          },
        };
      },
      {} as Record<
        EntityId,
        {
          product: IProduct;
          additions: (IAddition & { col: number })[];
          col: number;
        }
      >,
    ),
);

export const activePromoCodeSelector = createSelector(
  cartSelector,
  promoCodesSelectors.selectEntities,
  ({ promoCodeId }, entities) => entities[promoCodeId ?? ""],
);

export const cartSumSelector = createSelector(
  cartItemsSelector,
  activePromoCodeSelector,
  (cartItems, promoCode) => {
    const { productsSum, additionsSum } = values(cartItems).reduce(
      (acc, curr) => {
        const additionsSum = curr.additions.reduce(
          (acc, curr) => acc + curr?.price * curr.col ?? 0,
          0,
        );
        return {
          productsSum:
            acc.productsSum +
            getPriceWithDiscount(curr.product.price, curr.product.discount) *
              curr.col,
          additionsSum: acc.additionsSum + additionsSum * curr.col,
        };
      },
      { productsSum: 0, additionsSum: 0 },
    );

    const promoCodeDiscount = isNil(promoCode)
      ? 1
      : 1 - promoCode.discount / 100;

    return {
      totalSum: Math.round((additionsSum + productsSum) * promoCodeDiscount),
      promoCodeDiscountSum: Math.round(
        additionsSum +
          productsSum -
          (additionsSum + productsSum) * promoCodeDiscount,
      ),
    };
  },
);
