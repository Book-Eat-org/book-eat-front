import { Flex, Grid, Typography } from "@book-eat/ui";
import { Image } from "./Image";
import { ChainLogo } from "./ChainLogo";

const Header = () => {
  return (
    <Grid gap={4}>
      <Typography size="14/14">
        Загрузите фото сети и логотип в формате Jpg, до 2 MB
      </Typography>
      <Flex gap={5} alignItems="center">
        <Image />
        <ChainLogo />
      </Flex>
    </Grid>
  );
};

export default Header;
