import { Box, Grid, Typography } from "@book-eat/ui";
import { Item } from "./Item";
import { colors } from "@book-eat/ui";

export const Details = () => {
  return (
    <Grid gap={4}>
      <Typography size="24/24" fontWeight={600}>
        Детали заказа
      </Typography>
      <Box background={colors.general30} p={3} borderRadius={15}>
        <Grid gap={6}>
          <Item title="Статус заказа:">
            Готовится. Ссылка для отслеживания появится позже
          </Item>
          <Item title="Телефон ресторана:">8 (916) 777 66 55</Item>
          <Item title="Адрес доставки">Москва, кутузовский проспект</Item>
          <Item title="Клиент">Станислава, 8 (999) 888 77 66</Item>
        </Grid>
      </Box>
    </Grid>
  );
};
