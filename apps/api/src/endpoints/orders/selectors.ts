import { pipe } from "ramda";
import { ordersEndpoints } from "./endpoints.ts";
import { ordersAdapter } from "./adapter.ts";
import { EntityId } from "@reduxjs/toolkit";

const endpointsSelector = ordersEndpoints.endpoints.getOrders.select();

export const ordersSelectors = ordersAdapter.getSelectors(
  pipe(endpointsSelector, (a) => a.data ?? ordersAdapter.getInitialState()),
);

export const orderByIdSelectors = ordersAdapter.getSelectors(
  pipe(endpointsSelector, (a) => a.data ?? ordersAdapter.getInitialState()),
);

export const orderByIdSelectorsFactory = (id: EntityId) => {
  const endpointsSelector = ordersEndpoints.endpoints.getOrder.select(id);

  return ordersAdapter.getSelectors(
    pipe(endpointsSelector, (a) => a.data ?? ordersAdapter.getInitialState()),
  );
};
