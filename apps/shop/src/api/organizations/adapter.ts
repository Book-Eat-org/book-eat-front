import { createEntityAdapter } from "@reduxjs/toolkit";
import { IOrganization } from "$models";

export const organizationsAdapter = createEntityAdapter<IOrganization>({
  selectId: (entity) => entity.id,
});
