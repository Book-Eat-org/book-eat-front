import { Flex } from "@book-eat/ui";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const Buttons: FC<IProps> = ({ children }) => (
  <Flex justifyContent="space-between">{children}</Flex>
);

export default Buttons;
