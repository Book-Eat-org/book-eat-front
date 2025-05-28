import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const requiredString = (message: string) =>
  z
    .string({
      required_error: message,
      invalid_type_error: message,
    })
    .nonempty(message);

const formSchema = z.object({
  title: requiredString("Введите название"),
  weight: z.number().gt(0, "Укажите вес порции"),
  price: z.number().gt(0, "Укажите цену в рублях"),
  image: requiredString("Добавьте изображение"),
  stock: z
    .array(z.string(), { message: "Выберите наличие на точках" })
    .min(1, "Выберите наличие на точках"),
  categories: z
    .array(z.string(), { message: "Выберите категории" })
    .min(1, "Выберите категории"),
  ingredients: z.string().optional(),
  description: z.string().optional(),
  discount: z.number().optional(),
  additionals: z.array(z.string()).optional(),
});

export type TFormValues = z.infer<typeof formSchema>;

export const resolver = zodResolver(formSchema);
