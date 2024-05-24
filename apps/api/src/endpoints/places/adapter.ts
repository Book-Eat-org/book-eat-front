import { IPlace } from "$models";
import { createEntityAdapter } from "@reduxjs/toolkit";
export const placesAdapter = createEntityAdapter<IPlace>({
  selectId: (entity) => entity.id,
});
