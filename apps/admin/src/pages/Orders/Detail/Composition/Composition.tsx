import { Box, Grid, Typography } from "@book-eat/ui";
import { Product } from "./Product";
import { colors } from "@book-eat/ui";
import { Totals } from "./Totals";
import { useParams } from "react-router-dom";
import { ordersSelectors } from "$api";
import { useSelector } from "react-redux";
import { isNil } from "ramda";

export const Composition = () => {
  const { id: orderId } = useParams();

  const order = useSelector((state) =>
    ordersSelectors.selectById(state, orderId),
  )!;

  if (isNil(order)) {
    return null;
  }

  const { products } = order ?? {};
  return (
    <Grid gap={3}>
      <Typography size="24/24" fontWeight={600}>
        Состав заказа
      </Typography>
      <Box background={colors.general500} p={3} borderRadius={15}>
        <Grid gap={6}>
          {products.map((product) => (
            <Product key={product.id} id={product.id} />
          ))}
        </Grid>
      </Box>
      <Totals />
    </Grid>
  );
};
