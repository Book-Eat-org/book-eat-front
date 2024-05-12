import { createEntityAdapter } from "@reduxjs/toolkit";
import { IOrganization } from "@book-eat/api";

export const organizationsAdapter = createEntityAdapter<IOrganization>({
  selectId: (entity) => entity.id,
});
