import { F, pipe, T } from "ramda";
import { sortBy } from "ramda";
import { useCallback, useState } from "react";

import Header, { AddButton } from "../../Header";
import AddItem from "./AddItem";
import Item from "./Item";
import { Grid, Page, UIGrid } from "@book-eat/ui";
import { categoriesEndpoints, categoriesSelectors } from "$api";
import { useNavigate } from "react-router-dom";
import { PAGE_URLS } from "$constants";
import { useSelector } from "react-redux";
import Points from "../Items/Points";

const Groups = () => {
  const [addItemOpened, setAddItemOpened] = useState(false);

  const navigate = useNavigate();

  const { isLoading } = categoriesEndpoints.useFetchCategoriesQuery();

  const data = useSelector(categoriesSelectors.selectAll);

  const onBackClick = useCallback(() => navigate(PAGE_URLS.MENU), []);

  if (isLoading) {
    return null;
  }

  const sotredList = sortBy((item) => item.title, data);

  const closeAddItem = pipe(F, setAddItemOpened);
  const openAddItem = pipe(T, setAddItemOpened);

  return (
    <Page
      header={
        <Page.Header>
          <Page.Title right={<AddButton onClick={openAddItem} />}>
            Категории
          </Page.Title>
        </Page.Header>
      }
    >
      <Grid gap={4}>
        {addItemOpened && <AddItem onCancel={closeAddItem} />}
        {sotredList.map(({ grouppingsId }) => (
          <Item id={grouppingsId} key={grouppingsId} />
        ))}
      </Grid>
    </Page>
  );
};

export default Groups;
