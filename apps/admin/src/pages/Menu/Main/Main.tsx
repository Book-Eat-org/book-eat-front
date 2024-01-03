import { UIGrid } from "@book-eat/ui";

import Header from "../../Header";
import { MENU_ROUTE_CONFIG } from "../constants";
import NavItem from "./NavItem";

const Main = () => (
  <UIGrid gap="60px">
    <Header title="Редактирование меню" />
    <UIGrid gap="30px">
      {MENU_ROUTE_CONFIG.map(({ route }) => (
        <NavItem key={route} route={route} />
      ))}
    </UIGrid>
  </UIGrid>
);

export default Main;
