import { IOrganization } from "$models";
import { createEntityAdapter } from "@reduxjs/toolkit";

export const organizationsAdapter = createEntityAdapter<IOrganization>({
  selectId: (entity) => entity.id,
});
