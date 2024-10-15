import { Grid, NewPage, theme, Typography } from "@book-eat/ui";
import { useSelector } from "react-redux";
import { getCurrentOrganizationSelector } from "$store";
import { Search } from "./Search";
import { useOrdersPageContext } from "../context.ts";

export const Header = () => {
  const organization = useSelector(getCurrentOrganizationSelector);
  const { searchModeActive } = useOrdersPageContext();

  return (
    <NewPage.Header>
      <NewPage.Header.Top>
        <NewPage.Header.Top.Right>
          <Search />
        </NewPage.Header.Top.Right>
      </NewPage.Header.Top>
      {!searchModeActive && (
        <NewPage.Header.Title>
          <Grid gap={1}>
            <Typography
              size="12/12"
              color={theme.colors.general50}
              fontWeight={600}
            >
              {organization?.title}
            </Typography>
            <Typography
              size="26/26"
              color={theme.colors.general50}
              fontWeight={700}
            >
              Заказы
            </Typography>
          </Grid>
        </NewPage.Header.Title>
      )}
    </NewPage.Header>
  );
};
