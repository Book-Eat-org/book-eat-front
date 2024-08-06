import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IPlace } from "@book-eat/api";
import { IRootState } from "../index.ts";
import { placesEndpoints } from "$api";

const placesAdapter = createEntityAdapter({
  selectId: (entity: IPlace) => entity.id,
});

export const placesSelectors = placesAdapter.getSelectors<IRootState>(
  (state) => state.places,
);

export const placesSlices = createSlice({
  name: "products",
  initialState: placesAdapter.getInitialState(),
  reducers: {
    addOne: placesAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      placesEndpoints.endpoints.fetchPlacesByOrganization.matchFulfilled,
      (state, { payload }) => {
        return placesAdapter.addMany(state, payload.entities);
      },
    );
  },
});
