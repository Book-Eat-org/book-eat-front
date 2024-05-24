import { FC, ReactNode } from "react";
import { Flex } from "$components";

interface IProps {
  children: ReactNode;
}
const Buttons: FC<IProps> = ({ children }) => (
  <Flex justifyContent="space-between">{children}</Flex>
);

export default Buttons;
