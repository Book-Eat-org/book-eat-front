import { Box, Grid, Typography, colors } from "@book-eat/ui";
import { Item } from "./Item";
import { useOrder } from "../useOrder.ts";
import { Status } from "./Status";
import { useSelector } from "$hooks";
import { placesSelectors } from "@book-eat/api";
import { isNotNil } from "ramda";
import { TakeUpConfig } from "$constants";

export const Details = () => {
  const { delivery, customerInfo, places, status } = useOrder();
  const place = useSelector((state) =>
    placesSelectors.selectById(state, places.id),
  );

  const { address, type } = delivery;
  const { customerPhone, customerName } = customerInfo;

  return (
    <Grid gap={4}>
      <Typography size="24/24" fontWeight={600}>
        Детали заказа
      </Typography>
      <Box background={colors.general50} p={3} borderRadius={15}>
        <Grid gap={6}>
          <Item title={`Статус заказа (${TakeUpConfig[type]}):`}>
            <Status />
          </Item>
          <Item title="Телефон ресторана:">{place.info.phone}</Item>
          {isNotNil(address) && <Item title="Адрес доставки">{address}</Item>}
          <Item title="Клиент">
            {customerName}, {customerPhone}
          </Item>
        </Grid>
      </Box>
    </Grid>
  );
};
