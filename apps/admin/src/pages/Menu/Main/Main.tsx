import { Grid, Page } from "@book-eat/ui";

import { MENU_ROUTE_CONFIG } from "../constants";
import NavItem from "./NavItem";

const Main = () => (
  <Page
    header={
      <Page.Header>
        <Page.Title>Редактирование меню</Page.Title>
      </Page.Header>
    }
  >
    <Grid gap={6}>
      {MENU_ROUTE_CONFIG.map(({ route }) => (
        <NavItem key={route} route={route} />
      ))}
    </Grid>
  </Page>
);

export default Main;
