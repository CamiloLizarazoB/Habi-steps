import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  background: #80808052;
  width: 100%;
  padding-bottom: 100px;
  z-index: 1;
  display: block;
  backdrop-filter: blur(5px);
  height: 96vh;
  display: ${(props) => (props.open ? "block" : "none")};
  @media (min-width: 1280px) {
    display: none;
  }
`;

export const Dialog = styled.div`
  margin: auto;
  margin-top: 70px;
  width: 380px;
  box-shadow: 0px 0px 10px -3px rgba(0,0,0,0.75);
  border-radius: 10px;
`;

export const DialogContent = styled.div``;
