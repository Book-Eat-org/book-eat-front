import { prop, sortWith, descend, ascend, values } from "ramda";
import { ICategory } from "@book-eat/api";

export const sortCategories = (categories: Record<string, ICategory> | ICategory[]) => {
  const categoriesArray = Array.isArray(categories) 
    ? categories 
    : values(categories);
  
  return sortWith<ICategory>([
    descend(prop('isActive')),
    ascend(prop('priority'))
  ])(categoriesArray);
};
