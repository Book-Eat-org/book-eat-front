import { IProduct } from "@book-eat/api";
import { IFormValues } from "./models.ts";

export const inputAdapter = (data: IProduct): IFormValues => {
  const {
    title,
    description,
    discount,
    ingredients,
    price,
    weight = 0,
    additions = [],
    quantity,
    mainImageUrl,
  } = data;

  return {
    image: mainImageUrl,
    title,
    description,
    discount,
    ingredients,
    price,
    additionals: [],
    categories: [],
    stock: [],
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
