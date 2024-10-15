import { createContext, useContext } from "react";

export interface IOrdersPageContext {
  searchValue: string;
  setSearchValue: (value: string) => void;
  searchModeActive: boolean;
  setSearchModeActive: (value: boolean) => void;
}

export const OrdersPageContext = createContext<IOrdersPageContext>({
  searchModeActive: false,
  setSearchModeActive: () => undefined,
  searchValue: "",
  setSearchValue: () => undefined,
});

export const useOrdersPageContext = () => useContext(OrdersPageContext);
