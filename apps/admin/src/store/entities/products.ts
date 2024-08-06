import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@book-eat/api";
import { IRootState } from "../index.ts";
import { menuEndpoints, ordersEndpoints } from "$api";

const productsAdapter = createEntityAdapter({
  selectId: (item: IProduct) => item.id,
});

export const productsSelectors = productsAdapter.getSelectors<IRootState>(
  (state) => state.products,
);

export const productsSlice = createSlice({
  name: "products",
  initialState: productsAdapter.getInitialState(),
  reducers: {
    addOne: productsAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      menuEndpoints.endpoints.getMenuByPlaceId.matchFulfilled,
      (state, { payload }) => {
        return productsAdapter.addMany(state, payload.entities);
      },
    );
    builder.addMatcher(
      menuEndpoints.endpoints.getMenuByOrganization.matchFulfilled,
      (state, { payload }) => {
        return productsAdapter.addMany(state, payload.entities);
      },
    );
    builder.addMatcher(
      menuEndpoints.endpoints.editMenu.matchFulfilled,
      (state, { payload }) => {
        return productsAdapter.upsertMany(state, payload.entities);
      },
    );
    builder.addMatcher(
      menuEndpoints.endpoints.saveMenu.matchFulfilled,
      (state, { payload }) => {
        return productsAdapter.upsertMany(state, payload.entities);
      },
    );
    builder.addMatcher(
      ordersEndpoints.endpoints.getOrders.matchFulfilled,
      (state, { payload }) => {
        return productsAdapter.addMany(state, payload.entities);
      },
    );
    builder.addMatcher(
      ordersEndpoints.endpoints.getOrder.matchFulfilled,
      (state, { payload }) => {
        return productsAdapter.addMany(state, payload.products);
      },
    );
  },
});
