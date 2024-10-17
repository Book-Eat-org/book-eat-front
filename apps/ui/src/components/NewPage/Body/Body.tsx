import { FC, ReactNode } from "react";
import classes from "./Body.module.css";
import Box from "../../Box";

interface IProps {
  children: ReactNode;
  padding?: string;
}
const Body: FC<IProps> = ({ children, padding }) => (
  <Box className={classes.wrapper} padding={padding ?? "15px"}>
    {children}
  </Box>
);

export default Body;
