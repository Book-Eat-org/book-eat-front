import { Flex, Grid, Typography, theme } from "@book-eat/ui";
import { useOrder } from "../../useOrder.ts";
import { getTotalProductsPrices, SYMBOLS } from "@book-eat/utils";

export const Totals = () => {
  const { totalCost, products, delivery } = useOrder();

  const { products: productsSum, additions: additionsSum } =
    getTotalProductsPrices(products);

  const { price: deliveryPrice } = delivery ?? {};

  return (
    <Grid gap={2}>
      <Flex justifyContent="space-between" alignItems="center">
        <Typography color={theme.colors.general90}>
          Стоимость добавок:
        </Typography>
        <Typography color={theme.colors.general90}>
          {additionsSum} {SYMBOLS.RUB}
        </Typography>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Typography color={theme.colors.general90}>
          Стоимость товаров:
        </Typography>
        <Typography color={theme.colors.general90}>
          {productsSum} {SYMBOLS.RUB}
        </Typography>
      </Flex>
      {deliveryPrice && (
        <Flex justifyContent="space-between" alignItems="center">
          <Typography color={theme.colors.general90}>
            Стоимость доставки:
          </Typography>
          <Typography color={theme.colors.general90}>
            {deliveryPrice} {SYMBOLS.RUB}
          </Typography>
        </Flex>
      )}
      <Flex justifyContent="space-between" alignItems="center">
        <Typography fontWeight={700}>Общая сумма:</Typography>
        <Typography fontWeight={700}>
          {totalCost} {SYMBOLS.RUB}
        </Typography>
      </Flex>
    </Grid>
  );
};
