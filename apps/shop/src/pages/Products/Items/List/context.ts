import { createContext, useContext } from "react";
import { EntityId } from "@reduxjs/toolkit";

interface IProductListContextState {
  openedProductId?: EntityId;
  setOpenedProductId: (id?: EntityId) => void;
}

export const ProductListContext = createContext<IProductListContextState>({
  setOpenedProductId: () => void 0,
});

export const useProductListContext = () => useContext(ProductListContext);
