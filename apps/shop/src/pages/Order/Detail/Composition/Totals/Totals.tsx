import { Flex, Grid, Typography } from "@book-eat/ui";
import { theme } from "@book-eat/ui";
import { useOrder } from "../../useOrder.ts";
import { getTotalProductsPrices, formatPrice, SYMBOLS } from "@book-eat/utils";

export const Totals = () => {
  const { totalCost, delivery, products, totalCostWithoutPromoCode, promoCodeDiscount } = useOrder();
  const deliveryPrice = delivery.price;
  const { products: productsSum, additions: additionsSum } =
    getTotalProductsPrices(products);

  return (
    <Grid gap={2}>
      <Flex justifyContent="space-between" alignItems="flex-end">
        <Typography fontSize={14} color={theme.colors.general600}>
          Стоимость товаров:
        </Typography>
        <Flex flex="1" borderBottom={`1px dotted ${theme.colors.general500}`} />
        <Typography fontSize={14} color={theme.colors.general600}>
          {promoCodeDiscount && totalCostWithoutPromoCode
            ? `${formatPrice(totalCostWithoutPromoCode - additionsSum)} ${SYMBOLS.RUB}`
            : `${formatPrice(productsSum)} ${SYMBOLS.RUB}`
          }
        </Typography>
      </Flex>
      {Boolean(additionsSum) && (
        <Flex justifyContent="space-between" alignItems="flex-end">
          <Typography fontSize={14} color={theme.colors.general600}>
            Стоимость добавок:
          </Typography>
          <Flex flex="1" borderBottom={`1px dotted ${theme.colors.general500}`} />
          <Typography fontSize={14} color={theme.colors.general600}>
            {formatPrice(additionsSum)} {SYMBOLS.RUB}
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
            {formatPrice(totalCost - (totalCostWithoutPromoCode ?? 0))} {SYMBOLS.RUB}
          </Typography>
        </Flex>
      )}
      {Boolean(deliveryPrice) && (
        <Flex justifyContent="space-between" alignItems="flex-end">
          <Typography fontSize={14} color={theme.colors.general600}>
            Доставка:
          </Typography>
          <Flex flex="1" borderBottom={`1px dotted ${theme.colors.general500}`} />
          <Typography fontSize={14} color={theme.colors.general600}>
            {formatPrice(deliveryPrice)} {SYMBOLS.RUB}
          </Typography>
        </Flex>
      )}
      <Flex justifyContent="space-between" alignItems="flex-end">
        <Typography fontSize={18} fontWeight={700}>Сумма заказа:</Typography>
        <Flex flex="1" borderBottom={`1px dotted ${theme.colors.general500}`} />
        <Typography fontSize={18} fontWeight={700}>
          {formatPrice(totalCost)} {SYMBOLS.RUB}
        </Typography>
      </Flex>
    </Grid>
  );
};
