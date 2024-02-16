import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 50%;
  margin: auto;
  & form {
    margin: 10vh 0 20vh;
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
  border: none;
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
  margin-bottom: 50px;
  @media (max-width: 1360px) {
    font-size: 29px;
  }
  @media (max-width: 959px) {
    font-size: 25px;
  }
`;
export const WrapperButton = styled.div`
  text-align: center;
  margin: 50px 0;
`;
export const Instruction = styled.div`
  color: rgb(109, 105, 112);
  margin-bottom: 50px;
`;
