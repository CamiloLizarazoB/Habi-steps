import React from "react";
import { Input, Wrapper } from "./styles";

const InputComponent = (props) => {
  const { name, onChange, value } = props;
  return (
    <Wrapper>
      <Input name={name} onChange={onChange} value={value} {...props} />
    </Wrapper>
  );
};

export default InputComponent;
