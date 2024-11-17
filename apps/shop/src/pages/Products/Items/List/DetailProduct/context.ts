import { createContext, useContext } from "react";
import { EntityId } from "@reduxjs/toolkit";

interface ICardContextState {
  additions: Record<EntityId, { count: number }>;
  setAddition: (props: { id: EntityId; count: number }) => void;
}

export const CardContext = createContext<ICardContextState>({
  additions: {},
  setAddition: () => undefined,
});

export const useCardContext = () => useContext(CardContext);
