import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 50%;
  margin: auto;
  & form {
    margin: 23vh 0;
  }
`;

export const ButtonStyled = styled.button`
  background-color: rgb(124, 1, 255);
  color: rgb(255, 255, 255);
  cursor: pointer;
  height: 48px;
  font-family: sans-serif;
  font-size: 16px;
  width: 320px;
  border-radius: 40px;
  &:hover {
    background-color: rgb(99, 1, 204);
    border: 2px solid rgb(99, 1, 204);
  }
  &:disabled {
    opacity: 0.6;
    cursor: default;
    &:hover {
      background-color: rgb(124, 1, 255);
    }
  }
`;

export const Typography = styled.h1`
  font-weight: 600;
  color: #6301cc;
  margin-bottom: 100px;
`;
export const WrapperButton = styled.div`
  text-align: center;
  margin: 50px 0;
`;
