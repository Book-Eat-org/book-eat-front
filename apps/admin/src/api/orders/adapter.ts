import { createEntityAdapter } from "@reduxjs/toolkit";
import { IOrder } from "@book-eat/api";

export const ordersAdapter = createEntityAdapter<IOrder>({
  selectId: (entity) => entity.id,
});
