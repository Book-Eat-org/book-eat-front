import { Grid, Page } from "@book-eat/ui";
import { ORGANIZATION_PROFILE_ROUTES } from "../constants";
import NavItem from "./NavItem";

const Main = () => (
  <Page
    header={
      <Page.Header>
        <Page.Title>Профиль</Page.Title>
      </Page.Header>
    }
  >
    <Grid gap={6}>
      {ORGANIZATION_PROFILE_ROUTES.map(({ route }) => (
        <NavItem key={route} route={route} />
      ))}
    </Grid>
  </Page>
);

export default Main;
