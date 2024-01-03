import styled from "@emotion/styled";

interface IProps {
  selected?: boolean;
}
export const Item = styled.div<IProps>`
  padding: 10px;
  :hover {
    background-color: #aad182;
  }
`;
