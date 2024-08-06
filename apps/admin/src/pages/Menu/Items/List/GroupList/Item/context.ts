import { EntityId } from "@reduxjs/toolkit";
import { createContext, useContext } from "react";
import { useSelector } from "react-redux";
import { productsSelectors } from "../../../../../../store/entities";

interface IMenuListItemContext {
  id: EntityId;
}

export const MenuListItemContext = createContext<IMenuListItemContext>({
  id: "",
});

export const useMenuData = () => {
  const { id } = useContext(MenuListItemContext);

  return useSelector((state) => productsSelectors.selectById(state, id))!;
};
