import { IOrder } from "$models";
import { createEntityAdapter, EntityId } from "@reduxjs/toolkit";

export const ordersAdapter = createEntityAdapter<IOrder, EntityId>({
  selectId: (entity) => entity.id,
  sortComparer: (a, b) => Number(a.id) - Number(b.id),
});
