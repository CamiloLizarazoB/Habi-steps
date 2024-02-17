/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useFormContext } from "react-hook-form";
import { CheckBoxItem, Label, Wrapper } from "./styles";

const CheckBoxGroup = ({ name, options }) => {
  const { register } = useFormContext(); 

  return (
    <>
      <Wrapper>
        {options.map((option, index) => (
          <CheckBoxItem key={index} htmlFor={option.name}>
            <input
              type="checkbox"
              id={option.name}
              {...register(`${name}.${option.name}`)}
            />
            <Label>{option.text}</Label>
            <br />
          </CheckBoxItem>
        ))}
      </Wrapper>
    </>
  );
};

export default CheckBoxGroup;
