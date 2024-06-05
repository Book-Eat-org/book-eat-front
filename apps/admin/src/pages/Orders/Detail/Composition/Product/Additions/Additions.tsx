import { Grid, Typography } from "@book-eat/ui";
import { Addition } from "./Addition";
import { theme } from "@book-eat/ui";

export const Additions = () => (
  <Grid gap={1}>
    <Typography size="14/14" color={theme.colors.general80}>
      Добавки:
    </Typography>
    <Addition />
    <Addition />
  </Grid>
);
