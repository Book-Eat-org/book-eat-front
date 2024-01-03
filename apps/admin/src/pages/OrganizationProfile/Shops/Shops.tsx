import { not } from "ramda";
import { FC, useCallback, useState } from "react";

import Header from "../../Header";
import AddItem from "./AddItem";
import Item from "./Item";
import { UIGrid } from "@book-eat/ui";
import classes from "./Shops.module.css";
import { placesEndpoints } from "$api";
import { PAGE_URLS } from "$constants";
import { useNavigate } from "react-router-dom";

const Shops: FC = () => {
  const { data } = placesEndpoints.useFetchPlacesQuery();

  const [addNewVisible, setAddNewVisible] = useState(false);

  const navigate = useNavigate();

  const onBackClick = useCallback(() => navigate(PAGE_URLS.MY_SHOPS), []);

  const toggleAddVisible = () => setAddNewVisible(not);

  return (
    <UIGrid gap="60px">
      <Header
        title="Мои заведения"
        onAddClick={toggleAddVisible}
        onBackClick={onBackClick}
      />
      {!addNewVisible && (
        <UIGrid className={classes.list}>
          {data?.ids.map((id) => <Item key={id} id={id} />)}
        </UIGrid>
      )}
      {addNewVisible && (
        <AddItem onSubmit={toggleAddVisible} onCancel={toggleAddVisible} />
      )}
    </UIGrid>
  );
};

export default Shops;
