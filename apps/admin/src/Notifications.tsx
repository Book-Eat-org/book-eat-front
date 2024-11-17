import { FC, ReactNode, useState } from "react";
import {
  BellIcon24,
  Button,
  Flex,
  Grid,
  theme,
  Typography,
  UIPopupMenu,
} from "@book-eat/ui";

interface IProps {
  children: ReactNode;
}

export const Notifications: FC<IProps> = ({ children }) => {
  const [enabled, setEnabled] = useState(Notification.permission === "granted");
  const [opened, setOpened] = useState(true);

  console.log(Notification.permission);

  if (enabled) {
    return children;
  }

  const onClick = async () => {
    await Notification.requestPermission((val) => {
      setEnabled(val === "granted");
    });
  };

  const closeModal = () => setOpened(false);

  return (
    <>
      {opened && (
        <UIPopupMenu
          onClose={closeModal}
          header={
            <Flex gap={2} pl={3} alignItems="center">
              <Flex
                backgroundColor={theme.colors.accent50}
                borderRadius={10}
                padding="11px"
              >
                <BellIcon24 fill={theme.colors.accent50} />
              </Flex>
              <Typography size="18/18" fontWeight={700}>
                Уведомления
              </Typography>
            </Flex>
          }
        >
          <Grid gap={7}>
            <Typography size="14/14">
              Включите уведомления, чтобы не пропустить новые заказы. Вы также
              сможете сделать это позже в профиле.
            </Typography>
            <Button onClick={onClick}>Включить</Button>
          </Grid>
        </UIPopupMenu>
      )}
      {children}
    </>
  );
};
