import { useMenuData } from "../context.ts";
import { Flex, theme, Typography } from "@book-eat/ui";
import { formatPrice } from "@book-eat/utils";

export const Price = () => {
  const { price, discount } = useMenuData();

  const priceWithDiscount = discount
    ? price - (price * discount) / 100
    : undefined;

  return (
    <Flex alignItems="center" gap={1}>
      {priceWithDiscount && (
        <Typography fontWeight={600} size="14/14">
          {formatPrice(priceWithDiscount)} ₽
        </Typography>
      )}
      <Typography
        color={theme.colors.general600}
        size="14/14"
        textDecoration={priceWithDiscount ? "line-through" : undefined}
      >
        {formatPrice(price)} ₽
      </Typography>
    </Flex>
  );
};
