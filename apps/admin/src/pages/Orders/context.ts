import { createContext } from "react";
import { EntityId } from "@reduxjs/toolkit";

export interface IContextProps {
  companyId?: string;
  placeId?: number;
  setPlaceId?: (id: EntityId) => void;
  activeOrderId?: number;
  setActiveOrderId?: (id?: EntityId) => void;
}

export const OrdersContext = createContext<IContextProps>({});
