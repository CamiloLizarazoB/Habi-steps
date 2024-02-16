import React from "react";
import Steps from "../../components/steps/steps";
import SummaryButton from "../../components/summary-button/summary-button";
import HeaderContainer from "../header/header";
import { Wrapper } from "./styled";

const LeftContainer = ({ logo }) => {
  return (
    <Wrapper>
      <HeaderContainer logo={logo} />
      <Steps />
      <SummaryButton />
    </Wrapper>
  );
};

export default LeftContainer;
