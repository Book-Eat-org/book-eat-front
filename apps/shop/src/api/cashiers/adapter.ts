import { createEntityAdapter } from "@reduxjs/toolkit";
import { ICashier } from "$models";

export const cashiersAdapter = createEntityAdapter<ICashier>({
  selectId: (entity) => entity.id,
});
