import classes from "./Add.module.css";
import { CameraIcon } from "$assets";

export const Add = () => (
  <div className={classes.wrapper}>
    <div className={classes.icon}>
      <CameraIcon />
    </div>
  </div>
);
