/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  ButtonStyled,
  Instruction,
  Typography,
  Wrapper,
  WrapperButton,
} from "./styles";
import {
  Link,
  useLocation,
  useNavigate,
  Route,
  Routes,
} from "react-router-dom";
import { stepsObj } from "../../utils/constants";
import { FormProvider, useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import { addFieldData } from "../../actions";

const Steps = ({ actualStep, formFields }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location?.pathname;
  const navigate = useNavigate();
  const methods = useForm();
  const element = stepsObj.find((step) => step.path === currentPath);

  const handleClick = () => {
    const value = methods.getValues(element.name);

    dispatch(
      addFieldData({
        [element.name]: value,
      })
    );
  };

  const handleNavigateFirstStep = () => {
    navigate(stepsObj[0].path);
  };

  useEffect(() => {
    if (currentPath === "/") {
      handleNavigateFirstStep();
    }
  }, [currentPath]);

  useEffect(() => {
    if (formFields && Object.keys(formFields).length === 0) {
      handleNavigateFirstStep();
    }
  }, [formFields]);

  return (
    <Wrapper>
      <FormProvider {...methods}>
        <form>
          <Typography>{`Paso ${element?.order} de ${stepsObj.length}: ${element?.description}`}</Typography>
          <Instruction>{element?.instruction}</Instruction>
          <Routes>
            <Route exact path={"/"} element={<></>} />
            {stepsObj.map((step) => (
              <Route
                key={step.path}
                path={step.path}
                element={<step.component {...step} />}
              />
            ))}
          </Routes>
          {actualStep !== stepsObj.length && (
            <WrapperButton>
              <Link
                to={
                  stepsObj.find((step) => step.order === actualStep + 1)?.path
                }
              >
                <ButtonStyled
                  onClick={handleClick}
                  disabled={!methods.formState.isValid}
                >
                  Siguiente paso
                </ButtonStyled>
              </Link>
            </WrapperButton>
          )}
        </form>
      </FormProvider>
    </Wrapper>
  );
};

const useStateToProps = (state) => {
  return {
    actualStep: state.formData.step,
    formFields: state.formData.formFields,
  };
};

export default connect(useStateToProps)(Steps);
