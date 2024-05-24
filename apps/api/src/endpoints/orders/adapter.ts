import { IOrder } from "$models";
import { createEntityAdapter } from "@reduxjs/toolkit";

export const ordersAdapter = createEntityAdapter<IOrder>({
  selectId: (entity) => entity.id,
  sortComparer: (a, b) => Number(a.id) - Number(b.id),
});
