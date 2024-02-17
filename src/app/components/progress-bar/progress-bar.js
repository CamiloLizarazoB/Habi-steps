import { useEffect, useState } from "react";
import { stepsObj } from "../../utils/constants";
import { ProgressBarContent, ProgressBarStyled } from "./styles";

const ProgressBar = ({ step }) => {
  const [progress, setProgress] = useState(100 / stepsObj.length);

  useEffect(() => {
    const progress = (100 / stepsObj.length) * step;
    setProgress(progress);
  }, [step]);

  return (
    <ProgressBarContent className="progress-bar-container">
      <ProgressBarStyled progress={progress} />
    </ProgressBarContent>
  );
};

export default ProgressBar;
