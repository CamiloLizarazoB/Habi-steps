import styled from "@emotion/styled";

export const ProgressBarStyled = styled.div`
  width: ${(props) => props.progress}%;
  height: 12px;
  background: rgb(150, 52, 255);
  transition: width 0.2s ease-in-out 0s;
`;
export const ProgressBarContent = styled.div`
  height: 12px;
  background: rgb(243, 243, 243);
`;
