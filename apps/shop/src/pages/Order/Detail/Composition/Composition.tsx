import { Box, Grid, Typography } from "@book-eat/ui";
import { Product } from "./Product";
import { colors } from "@book-eat/ui";
import { Totals } from "./Totals";
import { useOrder } from "../useOrder.ts";

export const Composition = () => {
  const order = useOrder();

  return (
    <Grid gap={3}>
      <Typography size="24/24" fontWeight={600}>
        Состав заказа
      </Typography>
      <Box background={colors.general30} p={3} borderRadius={15}>
        <Grid gap={6}>
          {order?.products?.map((product) => <Product id={product.id} />)}
        </Grid>
      </Box>
      <Totals />
    </Grid>
  );
};
