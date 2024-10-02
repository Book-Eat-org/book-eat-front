import { Button, Grid, Typography } from "@book-eat/ui";
import { ORGANIZATION_PROFILE_ROUTES } from "../constants";
import { NavItem, Page } from "$components";
import { useNavigate } from "react-router-dom";
import { Logout } from "./Logout/Logout.tsx";

const Main = () => {
  const navigate = useNavigate();

  const sendNotice = () => {
    console.log("click");
    navigator.serviceWorker.controller.postMessage("test message");
  };
  const enableNotice = () => {
    Notification.requestPermission();
  };

  return (
    <Page>
      <Page.Header>
        <Page.Header.Buttons reverse>
          <Logout />
          <Button variant="primary" color="primary" onClick={sendNotice}>
            Pushh
          </Button>
          <Button variant="primary" color="primary" onClick={enableNotice}>
            enable notice
          </Button>
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
        </Grid>
      </Page.Body>
    </Page>
  );
};

export default Main;
