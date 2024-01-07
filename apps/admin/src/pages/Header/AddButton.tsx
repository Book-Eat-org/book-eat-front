import { PlusIcon10, UIButton } from "@book-eat/ui";
import classes from "./Header.module.css";
import { ComponentProps, FC } from "react";

const AddButton: FC<ComponentProps<typeof UIButton>> = (props) => (
  <UIButton className={classes.btn} {...props}>
    <PlusIcon10 />
  </UIButton>
);

export default AddButton;
