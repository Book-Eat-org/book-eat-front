import { BackIcon24, ExitIcon24, Flex, Grid, theme } from "@book-eat/ui";
import { ORGANIZATION_PROFILE_ROUTES } from "../constants";
import { NavItem, Page } from "$components";
import { useNavigate } from "react-router-dom";
import { loginApi } from "$api";

const Main = () => {
  const navigate = useNavigate();
  const [logout] = loginApi.useLogoutMutation();
  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };
  return (
    <Page>
      <Page.Header>
        <Page.Header.Buttons>
          <Flex
            backgroundColor={theme.colors.primary90}
            borderRadius={10}
            padding="6px"
          >
            <ExitIcon24 onClick={handleLogout} />
          </Flex>
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
