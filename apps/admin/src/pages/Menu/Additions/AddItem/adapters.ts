import { IAddition, PickPartial } from "@book-eat/api";
import { IFormValues } from "./models.ts";
import { EntityId } from "@reduxjs/toolkit";

export const inputAdapter = (data: IAddition): IFormValues => {
  const { title, price, weight,isActive, measurement } = data;
  return { price, title, weight, measurement };
};

export const outputAdapter = (
  data: IFormValues,
  id?: EntityId,
): PickPartial<IAddition, "id" | "isActive"> => {
  const { weight = 0, title = "", price = 0, measurement } = data;

  return { price, weight, title, id, measurement };
};
