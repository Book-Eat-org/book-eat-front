import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IAddition, additionsEndpoints } from "@book-eat/api";
import { IRootState } from "../index.ts";
import { ordersEndpoints } from "$api";
import { flatten } from "ramda";

const additionsAdapter = createEntityAdapter({
  selectId: (addition: IAddition) => addition.id,
});

export const additionsSelectors = additionsAdapter.getSelectors<IRootState>(
  (state) => state.additions,
);

export const additionsSlice = createSlice({
  name: "additions",
  initialState: {
    ids: [],
    entities: {},
  },
  reducers: {
    addOne: additionsAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      additionsEndpoints.endpoints.fetchAdditionsByIds.matchFulfilled,
      (state, { payload }) => {
        return additionsAdapter.addMany(state, payload.additions);
      },
    );
    builder.addMatcher(
      ordersEndpoints.endpoints.getOrder.matchFulfilled,
      (state, { payload }) => {
        const additions = flatten(
          payload.products.map(({ additions }) => additions),
        );
        console.log(payload, additions);
        return additionsAdapter.addMany(state, additions);
      },
    );
  },
});
