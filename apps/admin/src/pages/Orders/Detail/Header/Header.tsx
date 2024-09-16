import { Flex } from "@book-eat/ui";
import { Tag } from "./Tag";
import { useOrder } from "../useOrder.ts";
import { DELIVERY_TITLES_CONFIG } from "@book-eat/utils";
import dayjs from "dayjs";
import { isNotNil } from "ramda";

export const Header = () => {
  const { delivery, readyTime } = useOrder();
  const deliveryTypeLabel = DELIVERY_TITLES_CONFIG[delivery.type];

  const readyTimeLabel = dayjs(readyTime).format("HH:mm");

  return (
    <Flex gap={4}>
      <Tag>{deliveryTypeLabel}</Tag>
      {isNotNil(readyTime) && <Tag>Время выдачи: {readyTimeLabel}</Tag>}
    </Flex>
  );
};
