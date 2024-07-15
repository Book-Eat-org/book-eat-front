import { Flex, Grid, Typography } from "@book-eat/ui";
import { useSelector } from "react-redux";
import { cartSumSelector } from "$selectors";

export const Totals = () => {
  const { totalSum } = useSelector(cartSumSelector);

  return (
    <Grid gap={2}>
      <Flex justifyContent="space-between">
        <Typography fontWeight={700} size="24/24">
          Общая сумма:
        </Typography>
        <Typography fontWeight={700} size="24/24">
          {totalSum}
        </Typography>
      </Flex>
    </Grid>
  );
};
