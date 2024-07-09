import { Flex, Grid, Typography } from "@book-eat/ui";
import { theme } from "@book-eat/ui";
import { useOrder } from "../../useOrder.ts";

export const Totals = () => {
  const { totalCost, delivery } = useOrder();
  const deliveryPrice = delivery.price;
  return (
    <Grid gap={2}>
      <Flex justifyContent="space-between" alignItems="center">
        <Typography color={theme.colors.general80}>
          Стоимость добавок:
        </Typography>
        <Typography color={theme.colors.general80}>200 р</Typography>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Typography color={theme.colors.general80}>
          Стоимость товаров:
        </Typography>
        <Typography color={theme.colors.general80}>2000 р</Typography>
      </Flex>
      {deliveryPrice && (
        <Flex justifyContent="space-between" alignItems="center">
          <Typography color={theme.colors.general80}>
            Стоимость доставки:
          </Typography>
          <Typography color={theme.colors.general80}>
            {deliveryPrice}
          </Typography>
        </Flex>
      )}
      <Flex justifyContent="space-between" alignItems="center">
        <Typography fontWeight={700}>Общая сумма:</Typography>
        <Typography fontWeight={700}>{totalCost} р</Typography>
      </Flex>
    </Grid>
  );
};
