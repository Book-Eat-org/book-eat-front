import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { promoCodesEndpoints, IPromoCode } from "@book-eat/api";
import { IRootState } from "../index.ts";

const promoCodesAdapter = createEntityAdapter({
  selectId: (item: IPromoCode) => item.id,
});

export const promoCodesSelectors = promoCodesAdapter.getSelectors<IRootState>(
  (state) => state.promos,
);

export const promoCodesSlice = createSlice({
  name: "promos",
  initialState: {
    ids: [],
    entities: {},
  },
  reducers: {
    addOne: promoCodesAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      promoCodesEndpoints.endpoints.fetchPromoCodes.matchFulfilled,
      (state, { payload }) => {
        return promoCodesAdapter.setMany(state, payload);
      },
    );
    builder.addMatcher(
      promoCodesEndpoints.endpoints.updatePromoCode.matchFulfilled,
      (state, { payload }) => {
        return promoCodesAdapter.upsertMany(state, payload);
      },
    );
    builder.addMatcher(
      promoCodesEndpoints.endpoints.createPromoCode.matchFulfilled,
      (state, { payload }) => {
        return promoCodesAdapter.addOne(state, payload);
      },
    );
    builder.addMatcher(
      promoCodesEndpoints.endpoints.deletePromoCode.matchFulfilled,
      (state, { meta }) => {
        return promoCodesAdapter.removeOne(state, meta.arg.originalArgs);
      },
    );
  },
});
