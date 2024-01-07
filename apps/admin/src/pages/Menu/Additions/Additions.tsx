import { F, isNil, pipe, sortBy, T } from "ramda";
import { useCallback, useState } from "react";

import { AddButton } from "../../Header";
import AddItem from "./AddItem";
import Item from "./Item";
import { useNavigate } from "react-router-dom";
import { Grid, Page } from "@book-eat/ui";
import { additionsEndpoints, additionsSelectors } from "$api";
import { PAGE_URLS } from "$constants";
import { useSelector } from "react-redux";

const Additions = () => {
  const [addItemOpened, setAddItemOpened] = useState(false);

  const navigate = useNavigate();
  const data = useSelector(additionsSelectors.selectAll);

  const { isLoading } = additionsEndpoints.useFetchAdditionsQuery();

  const closeAddItem = pipe(F, setAddItemOpened);
  const openAddItem = pipe(T, setAddItemOpened);

  const onBackClick = useCallback(() => navigate(PAGE_URLS.MENU), []);

  if (isLoading || isNil(data)) {
    return null;
  }

  const sortedList = sortBy((item) => item?.title ?? "", data);

  return (
    <Page
      header={
        <Page.Header>
          <Page.Title right={<AddButton onClick={openAddItem} />}>
            Добавки
          </Page.Title>
        </Page.Header>
      }
    >
      <Grid>
        {addItemOpened && <AddItem onCancel={closeAddItem} />}
        {sortedList.map(({ id }) => (
          <Item id={id} key={id} />
        ))}
      </Grid>
    </Page>
  );
};

export default Additions;
