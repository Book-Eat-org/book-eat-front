import { IProduct } from "@book-eat/api";
import {TFormValues} from "./validation.ts";

export const inputAdapter = (data: IProduct): TFormValues => {
  const {
    title,
    description,
    discount,
    ingredients,
    price,
    weight = 0,
    additionsIds = [],
    placesIds = [],
    categoriesIds = [],
    mainImageUrl,
  } = data;

  return {
    image: mainImageUrl,
    title,
    description,
    discount,
    ingredients,
    price,
    additionals: additionsIds,
    categories: categoriesIds ?? [],
    stock: placesIds ?? [],
    weight,
  };
};

export const outputAdapter = (data: TFormValues): IProduct => {
  const {
    weight,
    price,
    title,
    image,
    categories,
    description,
    discount,
    stock,
    ingredients,
    additionals,
  } = data;

  return {
    title,
    description,
    categoriesIds: categories,
    placesIds: stock,
    additionsIds: additionals,
    mainImageUrl: image!,
    price,
    ingredients,
    discount,
    weight,
    imagesUrls: [image!],
    sku: "UNAVAILABLE",
    slug: "UNAVAILABLE",
    isRecommend: false,
    isActiveOnPlace: true,
    isActiveOnOrganization: true,
    quantity: 1,
  };
};
