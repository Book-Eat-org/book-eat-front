import { createContext, useContext } from "react";
import { EntityId } from "@reduxjs/toolkit";

interface ICardContextState {
  additionsIds: EntityId[];
  setAdditionsIds(ids: EntityId[]): void;
}

export const CardContext = createContext<ICardContextState>({
  additionsIds: [],
  setAdditionsIds: () => undefined,
});

export const useCardContext = () => useContext(CardContext);
