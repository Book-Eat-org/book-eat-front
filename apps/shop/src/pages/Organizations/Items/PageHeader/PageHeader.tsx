import { Grid, Typography } from "@book-eat/ui";
import classes from "./PageHeader.module.css";

const PageHeader = () => {
  return (
    <Grid p={4} gap={2} alignItems="center" justifyItems="center">
      <Typography className={classes.header} size="14/16">
        Способ получения
      </Typography>
      <Typography className={classes.header} size="14/16">
        Доставка
      </Typography>
    </Grid>
  );
};

export default PageHeader;
