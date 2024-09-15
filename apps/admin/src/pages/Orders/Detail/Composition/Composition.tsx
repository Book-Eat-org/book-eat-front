import { Box, Grid, Typography } from "@book-eat/ui";
import { Product } from "./Product";
import { colors } from "@book-eat/ui";
import { Totals } from "./Totals";
import { isNil } from "ramda";
import { useOrder } from "../useOrder.ts";

export const Composition = () => {
  const order = useOrder();

  if (isNil(order)) {
    return null;
  }

  const { products } = order ?? {};
  return (
    <Grid gap={3}>
      <Typography size="24/24" fontWeight={600}>
        Состав заказа
      </Typography>
      <Box background={colors.general50} p={3} borderRadius={15}>
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
