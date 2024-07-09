import { createContext, useContext } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "$hooks";
import { IPlace, placesSelectors } from "@book-eat/api";

export interface ICardContext {
  id: EntityId;
}

export const CardContext = createContext<ICardContext>({ id: "" });

export const useData = (): IPlace => {
  const { id } = useContext(CardContext);
  return useSelector((state) => placesSelectors.selectById(state, id));
};
