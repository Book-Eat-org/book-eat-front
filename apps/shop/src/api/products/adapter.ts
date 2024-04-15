import { createEntityAdapter } from "@reduxjs/toolkit";
import { IProduct } from "$models";

export const productsAdapters = createEntityAdapter<IProduct>({
  selectId: (entity) => entity.id,
});
