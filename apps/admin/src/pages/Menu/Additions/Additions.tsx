import { F, isNil, pipe, prop, sortBy, T, values } from "ramda";
import { useCallback, useState } from "react";

import Header from "../../Header";
import AddItem from "./AddItem";
import Item from "./Item";
import { useNavigate } from "react-router-dom";
import { UIGrid } from "@book-eat/ui";
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
    <UIGrid gap="60px">
      <Header
        title="Добавки"
        onAddClick={openAddItem}
        onBackClick={onBackClick}
      />
      <UIGrid>
        {addItemOpened && <AddItem onCancel={closeAddItem} />}
        {sortedList.map(({ id }) => (
          <Item id={id} key={id} />
        ))}
      </UIGrid>
    </UIGrid>
  );
};

export default Additions;
