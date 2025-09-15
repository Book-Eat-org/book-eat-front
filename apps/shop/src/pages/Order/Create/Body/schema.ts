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
  agreement: z.literal(true),
  phone: z.string().regex(/^\+?\d{11}$/, "Введите корректный номер телефона"),
  name: requiredString("Укажите имя"),
}).passthrough();

export type TFormValues = z.infer<typeof formSchema>;

export const resolver = zodResolver(formSchema);
