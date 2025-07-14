import React, { FC } from "react";
import Flex from "../../Flex";

interface IProps {
    children:React.ReactNode
}

const Footer: FC<IProps> = (props) => {
  const {
      children
  } = props;

  return (
      <Flex>{children}</Flex>
  );
};

export default Footer;
