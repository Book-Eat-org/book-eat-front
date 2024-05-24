import { Typography } from "$components";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const Title: FC<IProps> = ({ children }) => (
  <Typography color="white" size="26/26">
    {children}
  </Typography>
);

export default Title;
