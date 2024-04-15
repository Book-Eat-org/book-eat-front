import { createEntityAdapter } from "@reduxjs/toolkit";
import { IPlace } from "$models";

export const placesAdapter = createEntityAdapter<IPlace>({
  selectId: (entity) => entity.placeId,
});
