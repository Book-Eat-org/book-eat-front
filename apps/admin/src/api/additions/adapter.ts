import { createEntityAdapter } from "@reduxjs/toolkit";
import { IAddition } from "@book-eat/api";

export const additionsAdapters = createEntityAdapter<IAddition>({
  selectId: (entity) => entity.id,
});
