import { Grid, Switch, theme, Typography } from "@book-eat/ui";
import { useState } from "react";

export const Notifications = () => {
  const [enabled, setEnabled] = useState(Notification.permission === "granted");

  const onChange = async () => {
    await Notification.requestPermission((val) => {
      setEnabled(val === "granted");
    });
  };

  return (
    <Grid gap={2}>
      <Grid
        gridTemplateColumns="auto max-content"
        alignItems="center"
        padding="15px"
        backgroundColor={theme.colors.general50}
        borderRadius={10}
      >
        <Typography size="14/14" fontWeight={500}>
          Уведомления
        </Typography>
        <Switch onChange={onChange} checked={enabled} />
      </Grid>
      <Typography size="14/14" pl={3}>
        Включите уведомления, чтобы не пропустить новые заказы. Вы сможете
        выключить их в настройках телефона.
      </Typography>
    </Grid>
  );
};
