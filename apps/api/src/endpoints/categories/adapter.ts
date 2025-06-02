import { createEntityAdapter, EntityId } from "@reduxjs/toolkit";
import { ICategory } from "$models";
export const categoriesAdapters = createEntityAdapter<ICategory, EntityId>({
  selectId: (entity) => entity.id,
});
