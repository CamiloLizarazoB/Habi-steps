import { connect } from "react-redux";
import "./App.css";
import LeftContainer from "./app/containers/left-container/left-container";
import { BrowserRouter as Router } from "react-router-dom";
import SummaryContainer from "./app/containers/summary-container/summary-container";
import { stepsObj } from "./app/utils/constants";
import logo from "./logo.svg";
import { Wrapper } from "./styles";

function App({ step }) {
  return (
    <Router>
      <Wrapper>
        <LeftContainer logo={logo} />
        {step !== stepsObj.length && <SummaryContainer open={false}/>}
      </Wrapper>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    step: state.formData.step,
  };
};
export default connect(mapStateToProps)(App);
