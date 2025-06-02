import { IAddition } from "$models";
import { createEntityAdapter, EntityId } from "@reduxjs/toolkit";

export const additionsAdapters = createEntityAdapter<IAddition, EntityId>({
  selectId: (entity) => entity.id,
});
