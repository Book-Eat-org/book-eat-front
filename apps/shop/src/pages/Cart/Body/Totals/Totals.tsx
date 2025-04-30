import { Flex, Grid, theme, Typography } from "@book-eat/ui";
import { useSelector } from "react-redux";
import { activePromoCodeSelector, cartSumSelector } from "$selectors";
import { SYMBOLS } from "@book-eat/utils";

export const Totals = () => {
  const { totalSum, promoCodeDiscountSum } = useSelector(cartSumSelector);
  const promoCode = useSelector(activePromoCodeSelector);

  return (
    <Grid gap={2}>
      {promoCode && (
        <Flex justifyContent="space-between">
          <Typography
            fontWeight={700}
            size="14/14"
            color={theme.colors.accent600}
          >
            Скидка {promoCode.discount}%
          </Typography>
          <Typography size="14/14" color={theme.colors.accent600}>
            - {promoCodeDiscountSum} {SYMBOLS.RUB}
          </Typography>
        </Flex>
      )}
      <Flex justifyContent="space-between">
        <Typography fontWeight={700} size="24/24">
          Общая сумма:
        </Typography>
        <Typography fontWeight={700} size="24/24">
          {totalSum} {SYMBOLS.RUB}
        </Typography>
      </Flex>
    </Grid>
  );
};
