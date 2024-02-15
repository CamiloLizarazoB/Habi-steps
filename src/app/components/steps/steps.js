import React from "react";
import { Wrapper } from "./styles";
import { Link, useLocation } from "react-router-dom";

const Steps = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log("🚀 ~ Steps ~ currentPath:", currentPath);
  return (
    <Wrapper>
      <div>
        {/* Link para actualizar el path a '/nuevo-path' */}
        <Link to="/nuevo-path">Ir a nuevo path</Link>
      </div>
    </Wrapper>
  );
};

export default Steps;
