import { FC, ReactNode } from "react";
import Central from "./Central";
import Left from "./Left";
import Right from "./Right";
import styled from "@emotion/styled";
import { propOr } from "ramda";

interface IProps {
  children: ReactNode;
  templateAreas?: string;
  templateColumns?: string;
}

type TNestedComponents = {
  Right: typeof Right;
  Left: typeof Left;
  Central: typeof Central;
};

const Wrapper = styled.div<IProps>`
  display: grid;
  grid-template-areas: "${propOr("left central right", "templateAreas")}";
  grid-template-columns: ${propOr(
    "minmax(36px, min-content) auto minmax(36px, min-content)",
    "templateColumns",
  )};
  gap: 4px;
`;

const Top: FC<IProps> & TNestedComponents = (props) => {
  const { children, ...restProps } = props;

  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Top.Right = Right;
Top.Left = Left;
Top.Central = Central;

export default Top;
