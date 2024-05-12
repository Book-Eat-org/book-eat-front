import { not } from "ramda";
import { FC, useCallback, useState } from "react";

import Header, { AddButton } from "../../Header";
import AddItem from "./AddItem";
import Item from "./Item";
import { Page, UIGrid } from "@book-eat/ui";
import classes from "./Shops.module.css";
import { placesEndpoints } from "$api";
import { PAGE_URLS } from "$constants";
import { useNavigate } from "react-router-dom";

const Shops: FC = () => {
  const { data } = placesEndpoints.useFetchPlacesByOrganizationQuery();

  const [addNewVisible, setAddNewVisible] = useState(false);

  const navigate = useNavigate();

  const onBackClick = useCallback(() => navigate(PAGE_URLS.MY_SHOPS), []);

  const toggleAddVisible = () => setAddNewVisible(not);

  return (
    <Page
      header={
        <Page.Header>
          <Page.Title right={<AddButton onClick={toggleAddVisible} />}>
            Мои заведения
          </Page.Title>
        </Page.Header>
      }
    >
      <UIGrid className={classes.list}>
        {data?.ids.map((id) => <Item key={id} id={id} />)}
      </UIGrid>

      {addNewVisible && (
        <AddItem onSubmit={toggleAddVisible} onCancel={toggleAddVisible} />
      )}
    </Page>
  );
};

export default Shops;
