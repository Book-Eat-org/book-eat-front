import { FC, useState } from "react";

import List from "./List";
import {
  BackIcon24,
  Flex,
  Grid,
  NewPage,
  SearchIcon18,
  theme,
  Typography,
} from "@book-eat/ui";
import { useSelector } from "react-redux";
import { getCurrentOrganizationSelector } from "$store";
import { not } from "ramda";

const Items: FC = () => {
  const [searchModeActive, setSearchModeActive] = useState(false);
  const organization = useSelector(getCurrentOrganizationSelector);

  const toggleSearchModeActive = () => setSearchModeActive(not);
  return (
    <NewPage>
      <NewPage.Header>
        <NewPage.Header.Top>
          <NewPage.Header.Top.Right>
            <Flex
              backgroundColor={theme.colors.accent50}
              borderRadius={10}
              padding="9px"
              onClick={toggleSearchModeActive}
            >
              <SearchIcon18 />
            </Flex>
          </NewPage.Header.Top.Right>
        </NewPage.Header.Top>
        <NewPage.Header.Title>
          <Grid gap={1}>
            <Typography
              size="12/12"
              color={theme.colors.general50}
              fontWeight={600}
            >
              {organization.title}
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
      </NewPage.Header>
      <NewPage.Body>
        <List />
      </NewPage.Body>
    </NewPage>
  );
};

export default Items;
