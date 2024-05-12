import { not } from "ramda";
import { FC, useCallback, useState } from "react";

import Header, { AddButton } from "../../Header";
import AddItem from "./AddItem";
import Points from "./Points";
import { Page, UIGrid } from "@book-eat/ui";
import { useSelector } from "react-redux";
import { menuEndpoints, menuSelectors, placesEndpoints } from "$api";
import { useNavigate } from "react-router-dom";
import { PAGE_URLS } from "$constants";
import List from "./List";

const Items: FC = () => {
  const [points, setPoints] = useState<number[]>([]);
  const [addVisible, setAddVisible] = useState(false);

  const data = useSelector(menuSelectors.selectAll);
  menuEndpoints.useGetMenuByOrganizationQuery();
  placesEndpoints.useFetchPlacesQuery();

  const navigate = useNavigate();

  const toggleAddVisible = () => setAddVisible(not);

  const onBackClick = useCallback(() => navigate(PAGE_URLS.MENU), []);

  if (!data) {
    return null;
  }

  return (
    <Page
      header={
        <Page.Header>
          <Page.Title right={<AddButton onClick={toggleAddVisible} />}>
            Меню
          </Page.Title>
          <Points points={points} setPoints={setPoints} />
        </Page.Header>
      }
    >
      {addVisible && (
        <AddItem onCancel={toggleAddVisible} onSubmit={toggleAddVisible} />
      )}
      <List placesIds={points} />
    </Page>
  );
};

export default Items;
