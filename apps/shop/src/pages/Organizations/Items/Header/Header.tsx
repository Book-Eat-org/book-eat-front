import { Grid, Typography } from "@book-eat/ui";
import Search from "./Search";
import { useSelector } from "$hooks";
import { organizationsSelectors } from "@book-eat/api";

const Header = () => {
  const ids = useSelector(organizationsSelectors.selectIds);

  const isSearchAvailable = ids.length > 5;

  return (
    <Grid p="0 0 20px" gap={4}>
      <Typography fontWeight={600} size="24/24">
        Рестораны
      </Typography>
      {isSearchAvailable && <Search />}
    </Grid>
  );
};

export default Header;
