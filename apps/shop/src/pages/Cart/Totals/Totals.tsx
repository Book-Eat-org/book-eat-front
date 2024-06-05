import { Flex, Grid, theme, Typography } from "@book-eat/ui";
import { useSelector } from "react-redux";
import { cartSelector } from "../../../store/cart";
import { createMenuSelectorsByPlaceId, IProduct } from "@book-eat/api";

export const Totals = () => {
  const cartItems = useSelector(cartSelector);
  const selectors = createMenuSelectorsByPlaceId(cartItems.shopId!);

  const products = useSelector(selectors.selectEntities);

  const sum = cartItems.products.reduce((acc, curr) => {
    const product: IProduct = products[curr.id];
    return acc + product.price * curr.col;
  }, 0);

  return (
    <Grid gap={2}>
      <Flex justifyContent="space-between">
        <Typography color={theme.colors.general80} size="12/12">
          Стоимость добавок:
        </Typography>
        <Typography color={theme.colors.general80} size="12/12">
          0
        </Typography>
      </Flex>
      <Flex justifyContent="space-between">
        <Typography color={theme.colors.general80} size="12/12">
          Стоимость товаров:
        </Typography>
        <Typography color={theme.colors.general80} size="12/12">
          {sum}
        </Typography>
      </Flex>
      <Flex justifyContent="space-between">
        <Typography fontWeight={700} size="12/12">
          Общая сумма:
        </Typography>
        <Typography fontWeight={700} size="12/12">
          {sum}
        </Typography>
      </Flex>
    </Grid>
  );
};
