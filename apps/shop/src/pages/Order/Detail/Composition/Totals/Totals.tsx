import { Flex, Grid, Typography } from "@book-eat/ui";
import { theme } from "@book-eat/ui";
import { useOrder } from "../../useOrder.ts";
import { getTotalProductsPrices, SYMBOLS } from "@book-eat/utils";

export const Totals = () => {
  const { totalCost, delivery, products, totalCostWithoutPromoCode, promoCodeDiscount } = useOrder();
  const deliveryPrice = delivery.price;
  const { products: productsSum, additions: additionsSum } =
    getTotalProductsPrices(products);

  return (
    <Grid gap={2}>
      {Boolean(additionsSum) && (
        <Flex justifyContent="space-between" alignItems="flex-end">
          <Typography fontSize={14} color={theme.colors.general600}>
            Стоимость добавок:
          </Typography>
          <Flex flex="1" borderBottom={`1px dotted ${theme.colors.general500}`} />
          <Typography fontSize={14} color={theme.colors.general600}>
            {additionsSum} {SYMBOLS.RUB}
          </Typography>
        </Flex>
      )}
      <Flex justifyContent="space-between" alignItems="flex-end">
        <Typography fontSize={14} color={theme.colors.general600}>
          Стоимость товаров:
        </Typography>
        <Flex flex="1" borderBottom={`1px dotted ${theme.colors.general500}`} />
        <Typography fontSize={14} color={theme.colors.general600}>
          {productsSum} {SYMBOLS.RUB}
        </Typography>
      </Flex>
      {Boolean(deliveryPrice) && (
        <Flex justifyContent="space-between" alignItems="flex-end">
          <Typography fontSize={14} color={theme.colors.general600}>
            Стоимость доставки:
          </Typography>
          <Flex flex="1" borderBottom={`1px dotted ${theme.colors.general500}`} />
          <Typography fontSize={14} color={theme.colors.general600}>
            {deliveryPrice} {SYMBOLS.RUB}
          </Typography>
        </Flex>
      )}
      {Boolean(promoCodeDiscount && totalCostWithoutPromoCode) && (
        <Flex justifyContent="space-between" alignItems="flex-end">
          <Typography fontSize={14} color={theme.colors.accent600}>
            Скидка {promoCodeDiscount}%:
          </Typography>
          <Flex flex="1" borderBottom={`1px dotted ${theme.colors.general500}`} />
          <Typography fontSize={14} color={theme.colors.accent600}>
            {totalCost - (totalCostWithoutPromoCode ?? 0)} {SYMBOLS.RUB}
          </Typography>
        </Flex>
      )}
      <Flex justifyContent="space-between" alignItems="flex-end">
        <Typography fontSize={18} fontWeight={700}>Сумма заказа:</Typography>
        <Flex flex="1" borderBottom={`1px dotted ${theme.colors.general500}`} />
        <Typography fontSize={18} fontWeight={700}>{totalCost} {SYMBOLS.RUB}</Typography>
      </Flex>
    </Grid>
  );
};
