import { ICashier, PickPartial } from "@book-eat/api";
import { IFormValues } from "./models.ts";

export const inputAdapter = (data: ICashier): IFormValues => {
  const {
    secondName,
    firstName,
    middleName,
    phone,
    email,
    birthDate,
    username,
    placeId,
  } = data;
  const name = [secondName, firstName, middleName].join(" ");

  return { name, phone, email, birthDate, username, place: placeId };
};

export const outputAdapter = (
  data: IFormValues,
): PickPartial<ICashier, "id"> => {
  const {
    name,
    phone,
    place,
    password,
    confirmPassword,
    email,
    birthDate,
    username,
  } = data;
  const [secondName, firstName, middleName] = name.split(" ");

  return {
    secondName,
    firstName,
    middleName,
    phone,
    placeId: place,
    password,
    confirmPassword,
    email,
    birthDate,
    username,
  };
};
