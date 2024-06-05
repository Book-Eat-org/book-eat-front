import { Grid } from "@book-eat/ui";
import Search from "./Search";

const Header = () => {
  return (
    <Grid p="20px 15px" gap={4}>
      <Search />
    </Grid>
  );
};

export default Header;
