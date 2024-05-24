import { createEntityAdapter } from "@reduxjs/toolkit";
import { ICashier } from "@book-eat/api";

export const cashiersAdapter = createEntityAdapter<ICashier>({
  selectId: (entity) => entity.id,
});
