import { connect } from "react-redux";
import "./App.css";
import LeftContainer from "./app/containers/left-container/left-container";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <LeftContainer />
      {/* <Summary /> */}
    </Router>
  );
}

export default connect()(App);
