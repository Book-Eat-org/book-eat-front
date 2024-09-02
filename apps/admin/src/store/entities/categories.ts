import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { categoriesEndpoints, ICategory } from "@book-eat/api";
import { IRootState } from "../index.ts";

const categoriesAdapter = createEntityAdapter({
  selectId: (addition: ICategory) => addition.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const categoriesSelectors = categoriesAdapter.getSelectors<IRootState>(
  (state) => state.categories,
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    ids: [],
    entities: {},
  },
  reducers: {
    addOne: categoriesAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      categoriesEndpoints.endpoints.fetchCategories.matchFulfilled,
      (state, { payload }) => {
        return categoriesAdapter.addMany(state, payload.entities);
      },
    );
  },
});
