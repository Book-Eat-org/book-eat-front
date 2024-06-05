import { Box, Grid, Typography } from "@book-eat/ui";
import { Product } from "./Product";
import { colors } from "@book-eat/ui";
import { ORDER_DATA } from "../data.ts";
import { Totals } from "./Totals";

export const Composition = () => {
  const { products } = ORDER_DATA;
  return (
    <Grid gap={3}>
      <Typography size="24/24" fontWeight={600}>
        Состав заказа
      </Typography>
      <Box background={colors.general30} p={3} borderRadius={15}>
        <Grid gap={6}>
          {products.map((product) => (
            <Product id={product.id} />
          ))}
        </Grid>
      </Box>
      <Totals />
    </Grid>
  );
};
