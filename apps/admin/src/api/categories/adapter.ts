import { createEntityAdapter } from "@reduxjs/toolkit";
import { ICategory } from "@book-eat/api";

export const categoriesAdapters = createEntityAdapter<ICategory>({
  selectId: (entity) => entity.id,
});
