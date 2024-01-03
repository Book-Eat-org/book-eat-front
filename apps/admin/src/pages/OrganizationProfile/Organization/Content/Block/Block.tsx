import { Grid } from "@book-eat/ui";
import { FC, ReactNode } from "react";
import classes from "./Block.module.css";
interface IProps {
  children: ReactNode;
}
const Block: FC<IProps> = ({ children }) => (
  <Grid
    gap={9}
    padding="20px 15px 15px"
    width="100%"
    className={classes.wrapper}
  >
    {children}
  </Grid>
);

export default Block;
