import { productsAdapters } from "./adapter";
import { productsEndpoints } from "./endpoints";
import { pipe } from "ramda";

const endpointsSelector = productsEndpoints.endpoints.fetchProduct.select();

export const productsSelectors = productsAdapters.getSelectors(
  pipe(endpointsSelector, (a) => {
    return a.data ?? productsAdapters.getInitialState();
  }),
);
