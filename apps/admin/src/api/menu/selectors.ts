import { menuAdapter } from "./adapter.ts";
import { menuEndpoints } from "./endpoints.ts";
import { pipe } from "ramda";
import { EntityId } from "@reduxjs/toolkit";

const endpointsSelector =
  menuEndpoints.endpoints.getMenuByOrganization.select();

export const menuSelectors = menuAdapter.getSelectors(
  pipe(endpointsSelector, (a) => a.data ?? menuAdapter.getInitialState()),
);

export const menuByIdSelectorsFactory = (id: EntityId) => {
  const endpointsSelector = menuEndpoints.endpoints.getMenuById.select(id);

  return menuAdapter.getSelectors(
    pipe(endpointsSelector, (a) => a.data ?? menuAdapter.getInitialState()),
  );
};
