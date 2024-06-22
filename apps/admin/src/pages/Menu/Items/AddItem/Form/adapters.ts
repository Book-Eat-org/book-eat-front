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
    additions = [],
    placesIds = [],
    categoriesIds = [],
    mainImageUrl,
  } = data;

  const additionals = additions?.map(prop("id")) ?? [];

  return {
    image: mainImageUrl,
    title,
    description,
    discount,
    ingredients,
    price,
    additionals,
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
