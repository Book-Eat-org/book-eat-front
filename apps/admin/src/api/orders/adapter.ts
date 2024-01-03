import { createEntityAdapter } from "@reduxjs/toolkit";
import { IOrder } from "$models";

export const ordersAdapter = createEntityAdapter<IOrder>({
  selectId: (entity) => entity.id,
  sortComparer: (a, b) => Number(a.id) - Number(b.id),
});
