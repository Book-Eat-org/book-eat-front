import { Flex } from "@book-eat/ui";
import { Tag } from "./Tag";
import { useOrder } from "../useOrder.ts";
import { DELIVERY_TITLES_CONFIG } from "@book-eat/utils";

export const Header = () => {
  const { delivery } = useOrder();
  const deliveryTypeLabel = DELIVERY_TITLES_CONFIG[delivery.type];
  return (
    <Flex gap={4}>
      <Tag>{deliveryTypeLabel}</Tag>
      <Tag>Время выдачи: УКАЗАТЬ</Tag>
    </Flex>
  );
};
