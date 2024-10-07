import { createEntityAdapter } from "@reduxjs/toolkit";
import { IProduct } from "@book-eat/api";

export const menuAdapter = createEntityAdapter<IProduct>({
  selectId: (entity) => entity.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});
