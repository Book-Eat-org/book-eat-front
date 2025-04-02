import { IPromoCode, PickPartial } from "@book-eat/api";
import { IFormValues } from "./models.ts";
import { EntityId } from "@reduxjs/toolkit";

export const inputAdapter = (data: IPromoCode): IFormValues => {
  const { discount, promoCode } = data;
  return { discount, name: promoCode };
};

export const outputAdapter = (
  data: IFormValues,
  id?: EntityId,
): PickPartial<IPromoCode, "id"> => {
  const { name, discount } = data;

  return { discount, promoCode: name, id };
};
