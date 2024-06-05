import { FC } from "react";

import List from "./List";

import { Page } from "$components";

const Items: FC = () => {
  return (
    <Page>
      <Page.Header>
        <Page.Header.Title>Заказы</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <List />
      </Page.Body>
    </Page>
  );
};

export default Items;
