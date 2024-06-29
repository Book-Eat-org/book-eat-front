import { Grid, Typography } from "@book-eat/ui";
import { Image } from "./Image";

const Header = () => {
  return (
    <Grid gap={4}>
      <Typography size="14/14">
        Загрузите фото сети и логотип в формате Jpg, до 2 MB
      </Typography>
      <Image />
    </Grid>
  );
};

export default Header;
