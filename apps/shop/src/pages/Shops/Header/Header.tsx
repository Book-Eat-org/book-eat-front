import { Flex, Grid } from "@book-eat/ui";
import Search from "./Search";

const Header = () => {
  return (
    <Grid p="20px 15px">
      <Flex gap={2} alignItems="center">
        <Search />
      </Flex>
    </Grid>
  );
};

export default Header;
