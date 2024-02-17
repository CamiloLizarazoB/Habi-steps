import React from "react";
import { connect } from "react-redux";
import { stepsObj } from "../../utils/constants";
import {
  FlatOptions,
  GridContainer,
  GridItem,
  Options,
  SummaryLabel,
  SummaryText,
  Wrapper,
} from "./styles";

const SummaryComponent = ({ step, summary }) => {
  return (
    <Wrapper>
      <GridContainer>
        {Object.entries(summary).map((key, index) => {
          if (typeof key[1] === "object") {
            return (
              <FlatOptions key={`${index}-option`}>
                {Object.values(key[1]).includes(true) && (
                  <SummaryLabel>{"El apartamento cuenta con:"}</SummaryLabel>
                )}
                <Options>
                  {Object.entries(key[1]).map((key_1, index_1) => {
                    if (key_1[1]) {
                      return (
                        <div key={index_1}> 
                          <SummaryLabel
                            primary
                          >{`${stepsObj[index].options[index_1].text}`}</SummaryLabel>
                        </div>
                      );
                    }
                    return null;
                  })}
                </Options>
              </FlatOptions>
            );
          } else {
            return (
              <GridItem key={`${index}-option`}>
                <SummaryLabel>{`${stepsObj[index].description}:`}</SummaryLabel>
                <SummaryText>{key[1]}</SummaryText>
              </GridItem>
            );
          }
        })}
      </GridContainer>
      {step !== stepsObj.length && (
        <GridItem>
          <SummaryLabel>{`${stepsObj[step - 1].description}: `}</SummaryLabel>
        </GridItem>
      )}
    </Wrapper>
  );
};

export const mapStateToProps = (state) => {
  return {
    summary: state.formData.formFields,
    step: state.formData.step,
  };
};

export default connect(mapStateToProps)(SummaryComponent);
