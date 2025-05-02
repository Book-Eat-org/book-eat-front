import styled from "@emotion/styled";
import { propOr } from "ramda";

const Menu = styled.div<{ background: string; mode: string }>`
  position: ${({ mode }) => mode === "product" ? "absolute" : "fixed"};
  display: flex;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 25px 25px 0 0;
  ${({ mode }) => mode === "product" ? `
    max-height: calc(100% - 20px);
  ` : `
    max-height: 85vh;
  `}
  background: ${propOr("white", "background")};
  overflow: hidden;
`;

export default Menu;
