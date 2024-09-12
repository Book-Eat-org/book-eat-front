import { Button, Grid, Typography } from "@book-eat/ui";
import { useNavigate } from "react-router-dom";

export const Empty = () => {
  const navigate = useNavigate();

  const backToMenu = () => navigate(-1);

  return (
    <Grid gap={8} alignItems="center" justifyContent="center" paddingTop={5}>
      <Grid gap={2}>
        <Typography fontWeight={700} size="18/18" textAlign="center">
          В корзине пока пусто
        </Typography>
        <Typography size="14/14">Для выбора блюд перейдите в меню</Typography>
      </Grid>
      <Button onClick={backToMenu}>Вернуться в меню</Button>
    </Grid>
  );
};
