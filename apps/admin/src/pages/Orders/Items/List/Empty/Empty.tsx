import { Grid, Typography } from "@book-eat/ui";
import { theme } from "@book-eat/ui";

export const Empty = () => {
  return (
    <Grid justifyContent="center" justifyItems="center" mt="25px">
      <Typography size="18/18" fontWeight={700}>
        Ничего не нашлось
      </Typography>
      <Typography color={theme.colors.general600}>
        Попробуйте изменить запрос
      </Typography>
    </Grid>
  );
};
