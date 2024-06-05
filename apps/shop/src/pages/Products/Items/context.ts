import { createContext, useContext } from "react";
import { EntityId } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { createMenuSelectorsByPlaceId, menuSelectors } from "@book-eat/api";
import { useParams } from "react-router-dom";

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
  const { id: placeId } = useParams();
  const selectors = createMenuSelectorsByPlaceId(placeId!);

  const item = useSelector((state) => selectors.selectById(state, id));

  return item!;
};
