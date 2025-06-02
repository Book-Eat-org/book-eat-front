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
  email: z
    .string()
    .nonempty("Укажите адресс электронной почты")
    .email("Укажите почту в формате example@mail.ru"),
  phone: z.string().regex(/^\+?\d{11}$/, "Введите корректный номер телефона"),
  name: requiredString("Укажите имя"),
}).passthrough();

export type TFormValues = z.infer<typeof formSchema>;

export const resolver = zodResolver(formSchema);
