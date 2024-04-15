import { createContext, useContext } from "react";

export interface IContextState {
  searchValue: string;
  setSearchValue: (value: string) => void;
}
export const ShopsContext = createContext<IContextState>({
  searchValue: "",
  setSearchValue: () => void 0,
});

export const useShopsContext = () => useContext(ShopsContext);
