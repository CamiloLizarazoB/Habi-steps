/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { connect } from "react-redux";
import { Error, Input, Wrapper } from "./styles";

const InputComponent = ({ name, form, validation, Icon, placeholder }) => {
  const {
    register,
    setValue,
    formState: { dirtyFields, isValid },
  } = useFormContext();

  useEffect(() => {
    setValue(name, form[name]);
  }, [name]);

  return (
    <Wrapper>
      <div className="wrapper-elements">
        <Icon />
        <Input {...register(name, { required: true, ...validation })} placeholder={placeholder}/>
      </div>
      {dirtyFields[name] && !isValid && <Error>{validation?.message}</Error>}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    form: state.formData.formFields,
  };
};

export default connect(mapStateToProps)(InputComponent);
