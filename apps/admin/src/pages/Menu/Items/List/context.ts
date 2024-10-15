import { createContext, useContext } from "react";

export interface IMenuPageContext {
  searchValue: string;
  setSearchValue: (value: string) => void;
  searchModeActive: boolean;
  setSearchModeActive: (value: boolean) => void;
}

export const MenuPageContext = createContext<IMenuPageContext>({
  searchModeActive: false,
  setSearchModeActive: () => undefined,
  searchValue: "",
  setSearchValue: () => undefined,
});

export const useMenuPageContext = () => useContext(MenuPageContext);
