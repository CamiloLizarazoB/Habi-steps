import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 46px;
  & button {
    position: relative;
    z-index: 2;
    height: 46px;
    background-color: rgb(124, 1, 255);
    border-radius: 22px;
    border: none;
    color: white;
    font-weight: 600;
    padding: 0 30px;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;
