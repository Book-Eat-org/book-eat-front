import { TakeUpVariants } from "$enums";

export const TakeUpConfig: Record<TakeUpVariants, string> = {
  [TakeUpVariants.Delivery]: "Доставка",
  [TakeUpVariants.Inside]: "На месте",
  [TakeUpVariants.Outside]: "С собой",
};
