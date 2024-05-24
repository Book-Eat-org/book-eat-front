import { cashiersAdapter } from "./adapter.ts";
import { cashiersEndpoints } from "./endpoints.ts";
import { pipe } from "ramda";

const endpointsSelector = cashiersEndpoints.endpoints.getCashiers.select();

export const cashiersSelectors = cashiersAdapter.getSelectors(
  pipe(endpointsSelector, (a) => a.data ?? cashiersAdapter.getInitialState()),
);
