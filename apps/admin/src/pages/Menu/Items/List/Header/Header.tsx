import { BackIcon24, Flex, NewPage, theme, Typography } from "@book-eat/ui";
import { useNavigate } from "react-router-dom";
import { Search } from "./Search";
import { useMenuPageContext } from "../context.ts";

export const Header = () => {
  const { searchModeActive } = useMenuPageContext();
  const navigate = useNavigate();
  const onBackClick = () => navigate("..");

  return (
    <NewPage.Header>
      <NewPage.Header.Top>
        {!searchModeActive && (
          <NewPage.Header.Top.Left>
            <Flex
              backgroundColor={theme.colors.accent50}
              borderRadius={10}
              padding="6px"
            >
              <BackIcon24 onClick={onBackClick} />
            </Flex>
          </NewPage.Header.Top.Left>
        )}
        <NewPage.Header.Top.Right>
          <Search />
        </NewPage.Header.Top.Right>
      </NewPage.Header.Top>
      {!searchModeActive && (
        <NewPage.Header.Title>
          <Typography
            size="26/26"
            fontWeight={700}
            color={theme.colors.general50}
          >
            Меню
          </Typography>
        </NewPage.Header.Title>
      )}
    </NewPage.Header>
  );
};
