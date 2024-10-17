import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IOrganization, organizationsEndpoints } from "@book-eat/api";
import { IRootState } from "../index.ts";
import { values } from "ramda";

const organizationsAdapter = createEntityAdapter({
  selectId: (item: IOrganization) => item.id,
});

export const organizationsSelectors =
  organizationsAdapter.getSelectors<IRootState>((state) => state.organizations);

export const organizationsSlice = createSlice({
  name: "organizations",
  initialState: {
    ids: [],
    entities: {},
  },
  reducers: {
    addOne: organizationsAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      organizationsEndpoints.endpoints.getOrganisation.matchFulfilled,
      (state, { payload }) => {
        console.log(payload);
        return organizationsAdapter.addOne(state, values(payload.entities)[0]);
      },
    );
  },
});
