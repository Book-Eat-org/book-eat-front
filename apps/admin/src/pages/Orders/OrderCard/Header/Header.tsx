import { FC } from "react";
import { UIGrid, UITypography } from "@book-eat/ui";
import { useOrder } from "../../hooks";
import moment from "moment";
import classes from "./Header.module.css";
import Tags from "./Tags";

moment.locale("ru");

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

  const dateInHHMM = moment(creationDate).format("hh:mm");
  const dateInDays = moment(creationDate).format("L");

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
          {dateInHHMM} {dateInDays}
        </UITypography>
      </UIGrid>
      <Tags id={id} />
    </UIGrid>
  );
};

export default Header;
