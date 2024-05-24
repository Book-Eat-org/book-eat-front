import { IAddition } from "$models";
import { createEntityAdapter } from "@reduxjs/toolkit";

export const additionsAdapters = createEntityAdapter<IAddition>({
  selectId: (entity) => entity.id,
});
