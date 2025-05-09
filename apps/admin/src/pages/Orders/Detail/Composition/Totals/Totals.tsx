import { Flex, Grid, Typography, theme } from "@book-eat/ui";
import { useOrder } from "../../useOrder.ts";
import { getTotalProductsPrices, SYMBOLS } from "@book-eat/utils";
import { isNotNil } from "ramda";

export const Totals = () => {
  const { totalCost, products, delivery } = useOrder();

  const { products: productsSum, additions: additionsSum } =
    getTotalProductsPrices(products);

  const { price: deliveryPrice } = delivery ?? {};

  const dipiveryPriceAvailable = isNotNil(deliveryPrice) && deliveryPrice > 0;

  return (
    <Grid gap={2}>
      <Flex justifyContent="space-between" alignItems="center">
        <Typography color={theme.colors.general700}>
          Стоимость добавок:
        </Typography>
        <Typography color={theme.colors.general700}>
          {additionsSum} {SYMBOLS.RUB}
        </Typography>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Typography color={theme.colors.general700}>
          Стоимость товаров:
        </Typography>
        <Typography color={theme.colors.general700}>
          {productsSum} {SYMBOLS.RUB}
        </Typography>
      </Flex>
      {dipiveryPriceAvailable && (
        <Flex justifyContent="space-between" alignItems="center">
          <Typography color={theme.colors.general700}>
            Стоимость доставки:
          </Typography>
          <Typography color={theme.colors.general700}>
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
