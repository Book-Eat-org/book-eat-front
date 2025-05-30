import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IProduct, menuEndpoints, ordersEndpoints } from "@book-eat/api";
import { IRootState } from "../index.ts";
import { flatten, prop, uniqBy, values } from "ramda";
import { EntityState } from "@reduxjs/toolkit/src/entities/models.ts";

const productsAdapter = createEntityAdapter({
  selectId: (item: IProduct) => item.id,
});

export const productsSelectors = productsAdapter.getSelectors<IRootState>(
  (state) => state.products,
);

const INITIAL_STATE: EntityState<IProduct> = {
  ids: [],
  entities: {},
};

export const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
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
    builder.addMatcher(
      ordersEndpoints.endpoints.getOrder.matchFulfilled,
      (state, { payload }) => {
        const products = uniqBy(
          prop("id"),
          flatten(values(payload.entities).map(prop("products"))),
        );
        return productsAdapter.setMany(state, products);
      },
    );
  },
});
