import { FC } from "react";

import Item from "./Item";
import { cashiersEndpoints } from "$api";
import { Flex, Grid, PlusIcon24, Skeleton, theme } from "@book-eat/ui";
import { Page } from "$components";
import { navigateToPage, PageURLS } from "$constants";
import { useNavigate } from "react-router-dom";

const List: FC = () => {
  const navigate = useNavigate();
  const { data, isFetching } = cashiersEndpoints.useGetCashiersQuery();

  if (isFetching) {
    return <Skeleton count={12} gap={3} height={40} />;
  }

  const handleAddCLick = () => {
    navigate(navigateToPage(PageURLS.UsersCreate, {}));
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
            <PlusIcon24 onClick={handleAddCLick} />
          </Flex>
        </Page.Header.Buttons>
        <Page.Header.Title>Кассиры</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <Grid gap={3}>{data?.ids?.map((id) => <Item key={id} id={id} />)}</Grid>
      </Page.Body>
    </Page>
  );
};

export default List;
