import { Grid, theme, Typography } from "@book-eat/ui";
import { useProduct } from "../hooks.ts";

export const Title = () => {
  const { weight, title } = useProduct();
  return (
    <Grid
      gap={1}
      background={theme.colors.general50}
      padding={10}
      borderRadius={10}
    >
      <Typography size="14/14" color={theme.colors.general600}>{weight} г</Typography>
      <Typography size="18/18" fontWeight={500}>
        {title}
      </Typography>
    </Grid>
  );
};
