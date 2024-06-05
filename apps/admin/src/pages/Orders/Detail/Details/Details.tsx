import { Box, Grid, Typography } from "@book-eat/ui";
import { Item } from "./Item";
import { colors } from "@book-eat/ui";
import { useOrder } from "../useOrder.ts";
import { isNotNil } from "ramda";

export const Details = () => {
  const { customerInfo, delivery, personsCount, comment } = useOrder();

  const addressFields = [
    { title: delivery.address },
    { postfix: "подъезд", title: delivery.porch },
    { postfix: "этаж", title: delivery.floor },
    { postfix: "квартира", title: delivery.flat },
  ]
    .filter(({ title }) => isNotNil(title))
    .reduce((prev, curr) => {
      const item = curr.postfix ? curr.title + " " + curr.postfix : curr.title;

      return prev + ", " + item;
    }, "");

  return (
    <Grid gap={4}>
      <Typography size="24/24" fontWeight={600}>
        Инфо о клиенте
      </Typography>
      <Box background={colors.general30} p={3} borderRadius={15}>
        <Grid gap={6}>
          <Item title="Клиент:">{customerInfo?.customerName}</Item>
          <Item title="Адрес доставки">{addressFields}</Item>
          <Item title="Кол-во персон">{personsCount}</Item>
          <Item title="Комментарий">{comment}</Item>
          <Item title="Статус банка" gray>
            ЧТО УКАЗАТЬ?
          </Item>
        </Grid>
      </Box>
    </Grid>
  );
};
