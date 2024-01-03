import { FC } from "react";
import { Link } from "react-router-dom";
import { RightArrowIcon, UIGrid, UITypography } from "@book-eat/ui";

import { ORGANIZATION_PROFILE_ROUTES } from "../../constants";
import classes from "./NavItem.module.css";

interface IProps {
  route: string;
}

const NavItem: FC<IProps> = (props) => {
  const { route } = props;
  const item = ORGANIZATION_PROFILE_ROUTES.find((item) => item.route === route);

  if (!item) {
    return null;
  }

  const { title } = item;

  return (
    <Link to={route}>
      <UIGrid
        className={classes.wrapper}
        colSizes="auto max-content"
        padding="0 0 10px"
      >
        <UITypography variant="textMd">{title}</UITypography>
        <RightArrowIcon />
      </UIGrid>
    </Link>
  );
};

export default NavItem;
