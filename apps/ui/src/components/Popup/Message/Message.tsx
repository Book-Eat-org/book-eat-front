import { FC, ReactNode } from "react";
import { textSize } from "$theme";
import { Typography } from "$components";
import Flex from "../../Flex";

interface IProps {
  fontSize?:  keyof typeof textSize;
  fontWeight?: number;
  children: ReactNode;
}

export const Message: FC<IProps> = (props) => {
  const { 
    fontSize = "18/18", 
    fontWeight = 700, 
    children 
  } = props;

  return (
    <Flex alignItems="center" justifyContent="center" >
      <Typography textAlign="center" fontWeight={fontWeight} size={fontSize} >{children}</Typography>
    </Flex>
  );
}
