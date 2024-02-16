import styled from "@emotion/styled";

export const Wrapper = styled("div")(() => ({}));
export const Input = styled("input")(() => ({}));


export const Label = styled.span`
  margin-left: 10px;
`;

export const CheckBoxItem = styled.label`
  border: 1px solid #fcfcfc;
  width: 100%;
  display: block;
  margin-bottom: 23px;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  &:hover: {
    background: rgb(252, 252, 252);
  }
`;
