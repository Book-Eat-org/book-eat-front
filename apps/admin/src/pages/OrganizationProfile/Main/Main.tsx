import { Button, Grid, Typography } from "@book-eat/ui";
import { ORGANIZATION_PROFILE_ROUTES } from "../constants";
import { NavItem, Page } from "$components";
import { useNavigate } from "react-router-dom";
import { Logout } from "./Logout/Logout.tsx";
import { Notifications } from "./Notifications";

const Main = () => {
  const navigate = useNavigate();

  // const sendNotice = () => {
  //   navigator.serviceWorker.controller.postMessage("test message");
  // };
  // const enableNotice = () => {
  //   Notification.requestPermission();
  // };

  return (
    <Page>
      <Page.Header>
        <Page.Header.Buttons reverse>
          <Logout />
        </Page.Header.Buttons>
        <Page.Header.Title>
          <Typography fontWeight={600} size="26/26">
            Профиль
          </Typography>
        </Page.Header.Title>
      </Page.Header>
      <Page.Body>
        <Grid gap={3}>
          {ORGANIZATION_PROFILE_ROUTES.map(({ route, title }) => (
            <NavItem key={route} onClick={() => navigate(route)}>
              {title}
            </NavItem>
          ))}
          <Notifications />
        </Grid>
      </Page.Body>
    </Page>
  );
};

export default Main;
