import { createEntityAdapter } from "@reduxjs/toolkit";
import { IPlace } from "@book-eat/api";
export const placesAdapter = createEntityAdapter<IPlace>({
  selectId: (entity) => entity.id,
});
