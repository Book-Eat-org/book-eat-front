import { DeliveryTypeName } from "@book-eat/api/src";

export const TakeUpConfig: Record<DeliveryTypeName, string> = {
  [DeliveryTypeName.DELIVERY]: "Доставка",
  [DeliveryTypeName.ON_PLACE]: "На месте",
  [DeliveryTypeName.TO_OUTSIDE]: "С собой",
};
