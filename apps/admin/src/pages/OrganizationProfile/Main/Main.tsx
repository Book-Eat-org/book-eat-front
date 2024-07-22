import { Grid } from "@book-eat/ui";
import { ORGANIZATION_PROFILE_ROUTES } from "../constants";
import { NavItem, Page } from "$components";
import { useNavigate } from "react-router-dom";
import { Logout } from "./Logout/Logout.tsx";

const Main = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Page.Header>
        <Page.Header.Buttons>
          <Logout />
        </Page.Header.Buttons>
        <Page.Header.Title>Профиль</Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <Grid gap={3}>
          {ORGANIZATION_PROFILE_ROUTES.map(({ route, title }) => (
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
