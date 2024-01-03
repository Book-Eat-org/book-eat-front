import { F, pipe, T } from "ramda";
import { sortBy } from "ramda";
import { useCallback, useState } from "react";

import Header from "../../Header";
import AddItem from "./AddItem";
import Item from "./Item";
import { UIGrid } from "@book-eat/ui";
import { categoriesEndpoints, categoriesSelectors } from "$api";
import { useNavigate } from "react-router-dom";
import { PAGE_URLS } from "$constants";
import { useSelector } from "react-redux";

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
    <UIGrid gap="60px">
      <Header
        title="Категории"
        onAddClick={openAddItem}
        onBackClick={onBackClick}
      />
      <UIGrid gap="20px">
        {addItemOpened && <AddItem onCancel={closeAddItem} />}
        {sotredList.map(({ grouppingsId }) => (
          <Item id={grouppingsId} key={grouppingsId} />
        ))}
      </UIGrid>
    </UIGrid>
  );
};

export default Groups;
