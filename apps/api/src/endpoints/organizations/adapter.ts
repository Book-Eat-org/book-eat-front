import { IOrganization } from "$models";
import { createEntityAdapter, EntityId } from "@reduxjs/toolkit";

export const organizationsAdapter = createEntityAdapter<
  IOrganization,
  EntityId
>({
  selectId: (entity) => entity.id,
});
