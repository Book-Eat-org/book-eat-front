import { IProduct } from "@book-eat/api";
import { IFormValues } from "./models.ts";
import { prop } from "ramda";

export const inputAdapter = (data: IProduct): IFormValues => {
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

export const outputAdapter = (data: IFormValues): IProduct => {
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
