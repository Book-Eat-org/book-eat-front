import { createContext, useContext } from "react";

interface IContextState {
  values: string[];
  onChange: (value: string) => void;
  setOpened: (opened: boolean) => void;
}

export const UIMultipleSelectContext = createContext<IContextState>({
  values: [],
  setOpened: () => void 0,
  onChange: () => void 0,
});

export const useUIMultipleSelectContext = () =>
  useContext(UIMultipleSelectContext);
