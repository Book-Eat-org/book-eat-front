import { Grid, Typography } from "@book-eat/ui";

const Header = () => {
  return (
    <Grid p="0 0 20px" gap={4}>
      <Typography fontWeight={600} size="24/24">
        Рестораны
      </Typography>
    </Grid>
  );
};

export default Header;
