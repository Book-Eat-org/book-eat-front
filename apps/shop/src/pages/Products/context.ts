import { createContext, useContext } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { PRODUCTS } from "./stubs.ts";

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
  return PRODUCTS.entities.find((item) => item.id === id)!;
};
