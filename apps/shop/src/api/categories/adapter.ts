import { createEntityAdapter } from "@reduxjs/toolkit";
import { ICategory } from "$models";

export const categoriesAdapters = createEntityAdapter<ICategory>({
  selectId: (entity) => entity.grouppingsId,
});
