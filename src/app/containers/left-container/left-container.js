import React from "react";
import Steps from "../../components/steps/steps";
import HeaderContainer from "../header/header";
import { Wrapper } from "./styled";

const LeftContainer = ({ logo }) => {
  return (
    <Wrapper>
      <HeaderContainer logo={logo} />
      <Steps />
    </Wrapper>
  );
};

export default LeftContainer;
