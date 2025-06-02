import { createEntityAdapter, EntityId } from "@reduxjs/toolkit";
import { IProduct } from "$models";

export const menuAdapter = createEntityAdapter<IProduct, EntityId>({
  selectId: (entity) => entity.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});
