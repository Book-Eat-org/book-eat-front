import { createEntityAdapter } from "@reduxjs/toolkit";
import { IMenu } from "$models";

export const menuAdapter = createEntityAdapter<IMenu>({
  selectId: (entity) => entity.guid,
});
