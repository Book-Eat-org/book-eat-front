import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import {
  IAddition,
  additionsEndpoints,
  IPromoCode,
  promoCodesEndpoints,
} from "@book-eat/api";
import { IRootState } from "../index.ts";
import { EntityState } from "@reduxjs/toolkit/src/entities/models.ts";

const promoCodesAdapter = createEntityAdapter({
  selectId: (addition: IPromoCode) => addition.id,
});

export const promoCodesSelectors = promoCodesAdapter.getSelectors<IRootState>(
  (state) => state.promoCodes,
);

const INITIAL_STATE: EntityState<IPromoCode> = {
  ids: [],
  entities: {},
};

export const promoCodesSlice = createSlice({
  name: "promoCodes",
  initialState: INITIAL_STATE,
  reducers: {
    addOne: promoCodesAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      promoCodesEndpoints.endpoints.fetchPromoCodesByParams.matchFulfilled,
      (state, { payload }) => {
        return promoCodesAdapter.addOne(state, payload);
      },
    );
  },
});
