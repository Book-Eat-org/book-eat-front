import { UIGrid } from "@book-eat/ui";

import Header from "../../Header";
import { ORGANIZATION_PROFILE_ROUTES } from "../constants";
import NavItem from "./NavItem";

const Main = () => (
  <UIGrid gap="60px">
    <Header title="Профиль" />
    <UIGrid gap="30px">
      {ORGANIZATION_PROFILE_ROUTES.map(({ route }) => (
        <NavItem key={route} route={route} />
      ))}
    </UIGrid>
  </UIGrid>
);

export default Main;
