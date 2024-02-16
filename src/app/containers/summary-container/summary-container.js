import React from "react";
import { connect } from "react-redux";
import { stepsObj } from "../../utils/constants";
import {
  Divider,
  HeaderSummary,
  SummaryLabel,
  SummaryText,
  Typography,
  Wrapper,
} from "./styles";

const SummaryContainer = ({ summary, step, open }) => {

  return (
    <Wrapper open={open}>
      <HeaderSummary>
        <Typography>{"Información del cliente"}</Typography>
        <Divider />
      </HeaderSummary>
      {Object.entries(summary).map((key, index) => {
        if (typeof key[1] === "object") {
          return Object.entries(key[1]).map((key_1, index_1) => {
            if (key_1[1]) {
              return (
                <>
                  <SummaryLabel>{`${stepsObj[index].options[index_1].text}:`}</SummaryLabel>
                  <SummaryText>{key_1[1]}</SummaryText>
                </>
              );
            }
            return null;
          });
        } else {
          return (
            <>
              <SummaryLabel>{`${stepsObj[index].description}:`}</SummaryLabel>
              <SummaryText>{key[1]}</SummaryText>

            </>
          );
        }
      })}
      {step !== stepsObj.length && (
        <>
          <SummaryLabel>{`${stepsObj[step - 1].description}: `}</SummaryLabel>
        </>
      )}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    summary: state.formData.formFields,
    step: state.formData.step,
  };
};

export default connect(mapStateToProps)(SummaryContainer);
