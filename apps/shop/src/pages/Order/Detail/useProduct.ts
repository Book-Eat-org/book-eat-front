import { useSelector } from "$hooks";
import { EntityId } from "@reduxjs/toolkit";
import { productsSelectors } from "../../../store/entities";
import { IProduct } from "@book-eat/api";

export const useProduct = (id: EntityId): IProduct => {
  return useSelector((state) => productsSelectors.selectById(state, id)) ?? {};
};
