import {createEntityAdapter, createSlice, EntityState} from "@reduxjs/toolkit";
import { IOrganization, organizationsEndpoints } from "@book-eat/api";
import { IRootState } from "../index.ts";
import { values } from "ramda";

const organizationsAdapter = createEntityAdapter({
  selectId: (item: IOrganization) => item.id,
});

export const organizationsSelectors =
  organizationsAdapter.getSelectors<IRootState>((state) => state.organizations);

const INITIAL_STATE: EntityState<IOrganization> = {
  ids: [],
  entities: {},
};

export const organizationsSlice = createSlice({
  name: "organizations",
  initialState: INITIAL_STATE,
  reducers: {
    addOne: organizationsAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
        organizationsEndpoints.endpoints.getOrganisation.matchFulfilled,
        (state, { payload }) => {
          return organizationsAdapter.addOne(state, values(payload.entities)[0]);
        },
    );
  },
});
