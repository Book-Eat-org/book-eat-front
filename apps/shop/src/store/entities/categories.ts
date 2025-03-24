import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ICategory, categoriesEndpoints } from "@book-eat/api";
import { IRootState } from "../index.ts";
import { EntityState } from "@reduxjs/toolkit/src/entities/models.ts";

const categoriesAdapter = createEntityAdapter({
  selectId: (addition: ICategory) => addition.id,
});

export const categoriesSelectors = categoriesAdapter.getSelectors<IRootState>(
  (state) => state.categories,
);

const INITIAL_STATE: EntityState<ICategory> = {
  ids: [],
  entities: {},
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    addOne: categoriesAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      categoriesEndpoints.endpoints.loadCategoriesList.matchFulfilled,
      (state, { payload }) => {
        console.log(payload);
        return categoriesAdapter.addMany(state, payload);
      },
    );
  },
});
