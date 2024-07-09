import { useSelector } from "$hooks";
import { EntityId } from "@reduxjs/toolkit";
import { createMenuSelectorsByPlaceId } from "@book-eat/api";
import { useOrder } from "./useOrder.ts";

export const useProduct = (id: EntityId) => {
  const order = useOrder();

  const placeId = order?.places?.id;
  console.log(placeId, id);
  const selectors = createMenuSelectorsByPlaceId(placeId!);
  console.log(useSelector(selectors.selectAll));
  return (
    useSelector((state) =>
      selectors.selectById(state, "01fc53da-be0a-4fad-a1b5-092b73e0242d"),
    ) ?? {}
  );
};
