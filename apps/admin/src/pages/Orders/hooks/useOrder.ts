import { useOrders } from "./useOrders";
import { EntityId } from "@reduxjs/toolkit";

export const useOrder = (id: EntityId) => {
  const { data } = useOrders();

  return data.find((item) => item.id === id);
};
