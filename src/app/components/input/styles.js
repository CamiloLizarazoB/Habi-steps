import styled from "@emotion/styled";

export const Wrapper = styled.div`
  & .wrapper-elements {
    border-radius: 8px;
    border: 1px solid rgb(148, 148, 148);
    display: flex;
  }
  & svg {
    padding: 6px;
    width: 30px;
    height: 16px;
  }
`;

export const Input = styled.input`
  background: white;
  height: 100%;
  width: 90%;
  outline: none;
  font-size: 1.4rem;
  font-family: var(--font-roboto), sans-serif;
  border: none;
  border-radius: 8px;
`;

export const Error = styled.span`
  font-size: 12px;
  color: #e51717  ;
`;
