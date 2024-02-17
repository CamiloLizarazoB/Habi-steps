import React from "react";
import { connect } from "react-redux";
import ProgressBar from "../../components/progress-bar/progress-bar";
import { Wrapper } from "./styles";

const HeaderContainer = ({ step, logo }) => {
  return (
    <Wrapper>
      <img alt={'Logo habi'} src={logo} />
      <ProgressBar step={step} />
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return { step: state.formData.step };
};
export default connect(mapStateToProps)(HeaderContainer);
