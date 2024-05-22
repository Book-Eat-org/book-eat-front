import { ICashier, PickPartial } from "@book-eat/api";
import { IFormValues } from "./models.ts";

export const inputAdapter = (data: ICashier): IFormValues => {
  const { secondName, firstName, middleName, phone } = data;
  const name = [secondName, firstName, middleName].join(" ");

  return { name, phone };
};

export const outputAdapter = (
  data: IFormValues,
): PickPartial<ICashier, "id"> => {
  const { name, phone, place } = data;
  const [secondName, firstName, middleName] = name.split(" ");

  return { secondName, firstName, middleName, phone, placeId: place };
};
