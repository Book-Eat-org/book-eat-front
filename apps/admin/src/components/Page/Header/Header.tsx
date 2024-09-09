import { FC, ReactNode } from "react";
import Title from "./Title";
import Buttons from "./Buttons";
import { Flex } from "@book-eat/ui";

interface IProps {
  children: ReactNode;
}

type TNestedComponents = { Title: typeof Title; Buttons: typeof Buttons };

const Header: FC<IProps> & TNestedComponents = (props) => {
  const { children } = props;

  return (
    <Flex
      justifyContent="space-between"
      flexDirection="column"
      p={3}
      height={175}
      gap={2}
    >
      {children}
    </Flex>
  );
};

Header.Title = Title;
Header.Buttons = Buttons;

export default Header;
