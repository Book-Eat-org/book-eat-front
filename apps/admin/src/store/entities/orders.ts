import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IOrder } from "@book-eat/api";
import { ordersEndpoints } from "$api";
import { IRootState } from "$store";

const ordersAdapter = createEntityAdapter({
  selectId: (item: IOrder) => item.id,
});

export const ordersSelectors = ordersAdapter.getSelectors<IRootState>(
  (state) => state.orders,
);

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    ids: [],
    entities: {},
  },
  reducers: {
    addOne: ordersAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      ordersEndpoints.endpoints.getOrders.matchFulfilled,
      (state, { payload }) => {
        return ordersAdapter.addMany(state, payload.entities);
      },
    );
    builder.addMatcher(
      ordersEndpoints.endpoints.getOrder.matchFulfilled,
      (state, { payload }) => {
        console.log(payload);
        return ordersAdapter.setOne(state, payload);
      },
    );
  },
});
