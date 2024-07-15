import { createSelector, EntityId } from "@reduxjs/toolkit";
import { IRootState } from "../store";
import { isNotNil, keys, values } from "ramda";
import { IAddition, IProduct } from "@book-eat/api";
import { getPriceWithDiscount } from "@book-eat/utils";

const productsEntitiesSelector = (state: IRootState) => state.products;

export const cartItemsSelector = createSelector(
  (store: IRootState) => store.cart,
  productsEntitiesSelector,
  (store: IRootState) => store.additions,
  (cart, products, additionsStore) =>
    keys(cart.items).reduce(
      (acc, curr) => {
        const item = cart.items[curr];

        const product = products.entities[item.productId] as IProduct;
        const additions =
          item?.additionIds?.map(
            (additionId) => additionsStore.entities[additionId] as IAddition,
          ) ?? [];

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
        { product: IProduct; additions: IAddition[]; col: number }
      >,
    ),
);

export const cartSumSelector = createSelector(
  cartItemsSelector,
  (cartItems) => {
    const { productsSum, additionsSum } = values(cartItems).reduce(
      (acc, curr) => {
        const additionsSum = curr.additions.reduce(
          (acc, curr) => acc + curr?.price ?? 0,
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

    return { totalSum: additionsSum + productsSum };
  },
);
