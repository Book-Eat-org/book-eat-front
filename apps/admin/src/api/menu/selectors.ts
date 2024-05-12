import { menuAdapter } from "./adapter.ts";
import { menuEndpoints } from "./endpoints.ts";
import { pipe } from "ramda";

const endpointsSelector =
  menuEndpoints.endpoints.getMenuByOrganization.select();

export const menuSelectors = menuAdapter.getSelectors(
  pipe(endpointsSelector, (a) => a.data ?? menuAdapter.getInitialState()),
);
