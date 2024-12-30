import { Measures } from "@book-eat/utils";

export interface IFormValues {
  weight?: number;
  price?: number;
  categoryId?: string;
  title?: string;
  measure?: Measures;
}
