import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { IOrganization } from "@book-eat/api";
import { IRootState } from "../index.ts";
import { organizationsEndpoints } from "$api";

const organizationsAdapter = createEntityAdapter({
  selectId: (entity: IOrganization) => entity.id,
});

export const organizationsSelectors =
  organizationsAdapter.getSelectors<IRootState>((state) => state.organizations);

export const getCurrentOrganizationSelector = createSelector(
  organizationsSelectors.selectAll,
  (data) => data[0],
);

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
      organizationsEndpoints.endpoints.getCurrentOrganisation.matchFulfilled,
      (state, { payload }) => {
        return organizationsAdapter.setMany(state, payload.entities);
      },
    );
  },
});
