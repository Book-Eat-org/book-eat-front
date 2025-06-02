import { createEntityAdapter, EntityId } from "@reduxjs/toolkit";
import { ICashier } from "$models";

export const cashiersAdapter = createEntityAdapter<ICashier, EntityId>({
  selectId: (entity) => entity.id,
});
