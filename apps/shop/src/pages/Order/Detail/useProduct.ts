import { useSelector } from "$hooks";
import { EntityId } from "@reduxjs/toolkit";
import { productsSelectors } from "../../../store/entities";

export const useProduct = (id: EntityId) => {
  return useSelector((state) => productsSelectors.selectById(state, id)) ?? {};
};
