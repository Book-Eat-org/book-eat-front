import styled from "@emotion/styled";
import { layout, LayoutProps, position, PositionProps } from "styled-system";

export const Overlay = styled.div<PositionProps & LayoutProps>`
  ${position};
  ${layout};
  border: 1px solid gray;
  background-color: white;
  border-radius: 4px;
`;
