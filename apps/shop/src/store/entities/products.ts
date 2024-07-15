import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IMenu, menuEndpoints } from "@book-eat/api";
import { IRootState } from "../index.ts";
import { values } from "ramda";

const productsAdapter = createEntityAdapter({
  selectId: (item: IMenu) => item.id,
});

export const productsSelectors = productsAdapter.getSelectors<IRootState>(
  (state) => state.products,
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    ids: [],
    entities: {},
  },
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
      menuEndpoints.endpoints.getMenuById.matchFulfilled,
      (state, { payload }) => {
        return productsAdapter.setOne(state, values(payload.entities)[0]);
      },
    );
  },
});
