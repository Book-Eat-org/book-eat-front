import { FC } from "react";
import { UIGrid, UITypography } from "@book-eat/ui";
import { useOrder } from "../../hooks";
import classes from "./Header.module.css";
import Tags from "./Tags";
import dayjs from "dayjs";

export interface IProps {
  id: number;
}

const Header: FC<IProps> = (props) => {
  const { id } = props;

  const item = useOrder(id);

  if (!item) {
    return null;
  }

  const { place, creationDate } = item;

  const dateInHHMM = dayjs(creationDate).format("HH:MM DD.MM.YYYY");

  return (
    <UIGrid gap="30px">
      <UIGrid justifyContent="center" gap="10px">
        <UITypography
          variant="displayXl"
          weight="bold"
          className={classes.centered}
        >
          Заказ №{id}
        </UITypography>
        <UITypography variant="textMd" className={classes.centered}>
          {place?.title}
        </UITypography>
        <UITypography variant="textMd" className={classes.centered}>
          {dateInHHMM}
        </UITypography>
      </UIGrid>
      <Tags id={id} />
    </UIGrid>
  );
};

export default Header;
