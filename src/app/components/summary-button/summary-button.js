import React from "react";
import { connect } from "react-redux";
import { useDialogContext } from "../../providers/dialog.provider";
import { stepsObj } from "../../utils/constants";
import { Wrapper } from "./styles";

const SummaryButton = ({ step }) => {
  const { handleOpen, open } = useDialogContext();

  return (
    <Wrapper>
      {!open && step !== stepsObj.length && (
        <button onClick={handleOpen.bind(null)}>Ver resumen</button>
      )}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    step: state.formData.step,
  };
};
export default connect(mapStateToProps)(SummaryButton);
