import { Button } from "@book-eat/ui";
import { FC } from "react";
import { useWatch } from "react-hook-form";

interface IProps {
  onSubmit: () => void;
}

const Submit: FC<IProps> = (props) => {
  const { onSubmit } = props;

  const confirmation = useWatch({ name: "confirmation" });

  return (
    <Button disabled={!confirmation} onClick={onSubmit}>
      Войти
    </Button>
  );
};

export default Submit;
