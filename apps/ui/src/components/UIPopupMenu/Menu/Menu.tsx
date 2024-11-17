import styled from "@emotion/styled";
import { prop } from "ramda";

const Menu = styled.div<{ background: string }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 15px;
  bottom: 0;
  background: ${prop("background")};
  width: 100%;
  max-height: calc(100% - 42px);
  border-radius: 25px 25px 0 0;
`;

export default Menu;
