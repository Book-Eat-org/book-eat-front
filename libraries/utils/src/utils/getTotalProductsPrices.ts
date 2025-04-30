import { IProduct } from "@book-eat/api";
import { getPriceWithDiscount } from "./getPriceWithDiscount.ts";
import { sum } from "ramda";

export const getTotalProductsPrices = (products: IProduct[]) =>
  products.reduce(
    (acc, curr) => ({
      products:
        acc.products +
        getPriceWithDiscount(curr.price, curr.discount) * curr.amount,
      additions:
        acc.additions +
        sum(curr.additions.map(({ price, amount = 1 }) => price * amount)),
    }),
    { products: 0, additions: 0 },
  );
