import { pipe } from "ramda";
import { ordersEndpoints } from "./endpoints.ts";
import { ordersAdapter } from "./adapter.ts";

const endpointsSelector = ordersEndpoints.endpoints.getOrders.select();

export const ordersSelectors = ordersAdapter.getSelectors(
  pipe(endpointsSelector, (a) => a.data ?? ordersAdapter.getInitialState()),
);
