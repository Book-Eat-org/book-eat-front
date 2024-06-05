import { DeliveryTypeName } from "@book-eat/api";

export const DELIVERY_TITLES_CONFIG: Record<DeliveryTypeName, string> = {
  [DeliveryTypeName.TO_OUTSIDE]: "На вынос",
  [DeliveryTypeName.DELIVERY]: "Доставка",
  [DeliveryTypeName.ON_PLACE]: "На месте",
};
