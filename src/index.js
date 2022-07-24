import React from "react";
import ReactDOM from "react-dom/client";
import Personality from "./personality/personality";
import TestStatus from "./status/test-status";

const Root = (props) => {
  return (
    <>
      <Personality />
      <TestStatus />
    </>
  );
};

// ====================================================================== //

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
