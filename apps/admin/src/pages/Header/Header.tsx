import { FC, ReactNode } from "react";


import classes from "./Header.module.css";
import {LeftArrowIcon, PlusIcon10, UIButton, UIGrid, UIIconButton, UITypography} from "@book-eat/ui";

interface IProps {
  title: string;
  burgerMenu?: ReactNode;
  nav?: ReactNode;
  onAddClick?: () => void;
  onBackClick?: () => void;
}

const Header: FC<IProps> = (props) => {
  const { title, burgerMenu, nav, onAddClick, onBackClick } = props;

  const topPadding = onBackClick ? "10px" : "40px";

  return (
    <UIGrid
      gap="30px"
      padding={`${topPadding} 0 15px`}
      className={classes.wrapper}
    >
      {onBackClick && (
        <UIIconButton Icon={LeftArrowIcon} onClick={onBackClick} variant="secondary" />
      )}
      <UIGrid colSizes="auto max-content">
        <UITypography variant="displayXl" weight="bold">
          {title}
        </UITypography>
        {onAddClick && (
          <UIButton className={classes.btn} onClick={onAddClick}>
            <PlusIcon10 />
          </UIButton>
        )}
      </UIGrid>
      {burgerMenu && <UIGrid>{burgerMenu}</UIGrid>}
      {nav && <UIGrid>{nav}</UIGrid>}
    </UIGrid>
  );
};

export default Header;
