import { BurgerMenuIcon, Flex, Grid, Typography } from "@book-eat/ui";
import classes from "./Header.module.css";
import Search from "./Search";

const Header = () => {
  return (
    <Grid p="20px 15px" gap={4}>
      <Typography className={classes.header} size="26/32">
        Рестораны
      </Typography>
      <Search />
    </Grid>
  );
};

export default Header;
