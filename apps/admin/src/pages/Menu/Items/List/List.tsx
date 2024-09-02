import {
  BackIcon24,
  Flex,
  Grid,
  PlusIcon24,
  Skeleton,
  theme,
} from "@book-eat/ui";
import { useSelector } from "react-redux";
import { menuEndpoints, menuSelectors } from "$api";
import GroupList from "./GroupList";
import { FC } from "react";
import { Page } from "$components";
import { useNavigate } from "react-router-dom";
import { navigateToPage, PageURLS } from "$constants";

export const List: FC = () => {
  const navigate = useNavigate();
  const data = useSelector(menuSelectors.selectAll);
  const { isFetching } = menuEndpoints.useGetMenuByOrganizationQuery();

  const handleAddCLick = () =>
    navigate(navigateToPage(PageURLS.MenuListCreate, {}));
  const onBackClick = () => navigate("..");

  if (isFetching) {
    return <Skeleton count={12} gap={3} height={40} />;
  }

  const grouped = {
    "1": data,
  };

  return (
    <Page>
      <Page.Header>
        <Page.Header.Buttons>
          <Flex
            backgroundColor={theme.colors.accent50}
            borderRadius={10}
            padding="6px"
          >
            <BackIcon24 onClick={onBackClick} />
          </Flex>
          <Flex
            backgroundColor={theme.colors.accent50}
            borderRadius={10}
            padding="6px"
          >
            <PlusIcon24 onClick={handleAddCLick} />
          </Flex>
        </Page.Header.Buttons>
        <Page.Header.Title>Меню</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <Grid gap={2}>
          {Object.keys(grouped).map((key) => (
            <GroupList groupId={key} key={key} />
          ))}
        </Grid>
      </Page.Body>
    </Page>
  );
};
