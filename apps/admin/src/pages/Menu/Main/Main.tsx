import { Grid } from "@book-eat/ui";

import { MENU_ROUTE_CONFIG } from "../constants";
import { useNavigate } from "react-router-dom";
import { NavItem, Page } from "$components";

const Main = () => {
  const navigate = useNavigate();
  return (
    <Page>
      <Page.Header>
        <Page.Header.Title>Редактирование меню</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <Grid gap={3}>
          {MENU_ROUTE_CONFIG.map(({ route, title }) => (
            <NavItem key={route} onClick={() => navigate(route)}>
              {title}
            </NavItem>
          ))}
        </Grid>
      </Page.Body>
    </Page>
  );
};

export default Main;
