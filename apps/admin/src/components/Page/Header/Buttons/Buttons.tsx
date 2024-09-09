import { Flex } from "@book-eat/ui";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  reverse?: boolean;
}
const Buttons: FC<IProps> = ({ children, reverse }) => (
  <Flex
    justifyContent="space-between"
    flexDirection={reverse ? "row-reverse" : undefined}
  >
    {children}
  </Flex>
);

export default Buttons;
