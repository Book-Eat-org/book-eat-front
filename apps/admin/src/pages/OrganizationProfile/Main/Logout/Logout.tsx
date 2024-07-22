import { Button, ExitIcon24, Flex, theme, UIPopupMenu } from "@book-eat/ui";
import { loginApi } from "$api";
import { useState } from "react";
import { not } from "ramda";

export const Logout = () => {
  const [confirmOpened, setConfitmOpened] = useState(false);
  const [logout] = loginApi.useLogoutMutation();
  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };

  const toggleConfirmOpened = () => setConfitmOpened(not);

  return (
    <>
      <Flex
        backgroundColor={theme.colors.primary90}
        borderRadius={10}
        padding="6px"
      >
        <ExitIcon24 onClick={toggleConfirmOpened} />
      </Flex>
      {confirmOpened && (
        <UIPopupMenu onClose={toggleConfirmOpened} height={135}>
          <Flex justifyContent="center">
            <Button onClick={handleLogout} width={125}>
              Выйти
            </Button>
          </Flex>
        </UIPopupMenu>
      )}
    </>
  );
};
