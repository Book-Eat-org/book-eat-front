import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IAddition, additionsEndpoints } from "@book-eat/api";
import { IRootState } from "../index.ts";
import { EntityState } from "@reduxjs/toolkit/src/entities/models.ts";

const additionsAdapter = createEntityAdapter({
  selectId: (addition: IAddition) => addition.id,
});

export const additionsSelectors = additionsAdapter.getSelectors<IRootState>(
  (state) => state.additions,
);

const INITIAL_STATE: EntityState<IAddition> = {
  ids: [],
  entities: {},
};

export const additionsSlice = createSlice({
  name: "additions",
  initialState: INITIAL_STATE,
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
  },
});
