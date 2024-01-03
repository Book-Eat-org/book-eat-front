import { createEntityAdapter } from "@reduxjs/toolkit";
import { IAddition } from "$models";

export const additionsAdapters = createEntityAdapter<IAddition>({
  selectId: (entity) => entity.id,
});
