import styled from "@emotion/styled";
import { propOr } from "ramda";

const Menu = styled.div<{ background: string }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  background: ${propOr("white", "background")};
  width: 100%;
  height: 100%;
  max-height: calc(100% - 20px);
  border-radius: 25px 25px 0 0;
`;

export default Menu;
