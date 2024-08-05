import { useMenuData } from "../context.ts";
import { Flex, theme, Typography } from "@book-eat/ui";

export const Price = () => {
  const { price, discount } = useMenuData();

  const priceWithDiscount = discount
    ? price - (price * discount) / 100
    : undefined;

  return (
    <Flex alignItems="center" gap={1}>
      {priceWithDiscount && (
        <Typography fontWeight={600} size="14/14">
          {priceWithDiscount} ₽
        </Typography>
      )}
      <Typography
        color={theme.colors.general90}
        size="14/14"
        textDecoration={priceWithDiscount ? "line-through" : undefined}
      >
        {price} ₽
      </Typography>
    </Flex>
  );
};
