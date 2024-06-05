import { createAction, EntityId } from "@reduxjs/toolkit";

export const setActiveShop = createAction<EntityId>("SET_ACTIVE_SHOP");
