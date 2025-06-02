import { IPlace } from "$models";
import {createEntityAdapter, EntityId} from "@reduxjs/toolkit";
export const placesAdapter = createEntityAdapter<IPlace,EntityId>({
  selectId: (entity) => entity.id,
});
