import { createContext, useContext } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { menuSelectors } from "@book-eat/api";

export interface IContextState {
  searchValue: string;
  setSearchValue: (value: string) => void;
}
export const OrganizationsContext = createContext<IContextState>({
  searchValue: "",
  setSearchValue: () => void 0,
});

export const useOrganizationsContext = () => useContext(OrganizationsContext);

export const useCard = (id: EntityId) => {
  const item = useSelector((state) => menuSelectors.selectById(state, id));

  return item!;
};
