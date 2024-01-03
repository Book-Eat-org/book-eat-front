import styled from "@emotion/styled";

const Overlay = styled.div`
  overflow: hidden;
  top: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

export default Overlay;
