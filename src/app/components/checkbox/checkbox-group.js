/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useFormContext } from "react-hook-form";
import { Wrapper } from "./styles";

const CheckBoxGroup = ({ name, options }) => {
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <Wrapper>
      {options.map((option) => (
        <>
          <input
            type="checkbox"
            id={option.name}
            {...register(`${name}.${option.name}`)}
          />
          <label htmlFor={option.name}>{option.text}</label>
          <br />
        </>
      ))}
    </Wrapper>
  );
};


export default CheckBoxGroup;
