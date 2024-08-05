import { Flex, Grid, Typography } from "@book-eat/ui";
import { theme } from "@book-eat/ui";
import { useOrder } from "../../useOrder.ts";
import { getTotalProductsPrices, SYMBOLS } from "@book-eat/utils";

export const Totals = () => {
  const { totalCost, delivery, products } = useOrder();
  const deliveryPrice = delivery.price;
  const { products: productsSum, additions: additionsSum } =
    getTotalProductsPrices(products);
  return (
    <Grid gap={2}>
      <Flex justifyContent="space-between" alignItems="center">
        <Typography color={theme.colors.general80}>
          Стоимость добавок:
        </Typography>
        <Typography color={theme.colors.general80}>
          {additionsSum} {SYMBOLS.RUB}
        </Typography>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Typography color={theme.colors.general80}>
          Стоимость товаров:
        </Typography>
        <Typography color={theme.colors.general80}>
          {productsSum} {SYMBOLS.RUB}
        </Typography>
      </Flex>
      {deliveryPrice && (
        <Flex justifyContent="space-between" alignItems="center">
          <Typography color={theme.colors.general80}>
            Стоимость доставки:
          </Typography>
          <Typography color={theme.colors.general80}>
            {deliveryPrice} {SYMBOLS.RUB}
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
