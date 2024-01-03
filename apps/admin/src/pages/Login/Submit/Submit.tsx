import classes from "../Login.module.css";
import { UIButton } from "@book-eat/ui";
import { FC } from "react";
import { useWatch } from "react-hook-form";

interface IProps {
  onSubmit: () => void;
}

const Submit: FC<IProps> = (props) => {
  const { onSubmit } = props;

  const confirmation = useWatch({ name: "confirmation" });

  return (
    <UIButton
      variant={confirmation ? "primary" : "secondary"}
      className={classes.submitBtn}
      onClick={onSubmit}
    >
      Войти
    </UIButton>
  );
};

export default Submit;
