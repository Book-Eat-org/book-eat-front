import { Box, Grid, Typography } from "@book-eat/ui";
import { Item } from "./Item";
import { colors } from "@book-eat/ui";
import { useOrder } from "../useOrder.ts";

export const Details = () => {
  const { delivery, customerInfo } = useOrder();

  const { address } = delivery;
  const { customerPhone, customerName } = customerInfo;
  return (
    <Grid gap={4}>
      <Typography size="24/24" fontWeight={600}>
        Детали заказа
      </Typography>
      <Box background={colors.general500} p={3} borderRadius={15}>
        <Grid gap={6}>
          <Item title="Статус заказа:">
            Готовится. Ссылка для отслеживания появится позже
          </Item>
          <Item title="Телефон ресторана:">8 (916) 777 66 55</Item>
          <Item title="Адрес доставки">{address}</Item>
          <Item title="Клиент">
            {customerName}, {customerPhone}
          </Item>
        </Grid>
      </Box>
    </Grid>
  );
};
