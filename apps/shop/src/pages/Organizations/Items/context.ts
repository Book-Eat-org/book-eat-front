import { createContext, useContext } from "react";

export interface IContextState {
  searchValue: string;
  setSearchValue: (value: string) => void;
}
export const OrganizationsContext = createContext<IContextState>({
  searchValue: "",
  setSearchValue: () => void 0,
});

export const useOrganizationsContext = () => useContext(OrganizationsContext);
