import React from "react";
import ReactDOM from "react-dom/client";
import Personality from "./personality/personality";
import MainStatus from "./status/status-main";

const Root = () => {
  return (
    <>
      <Personality />
      <MainStatus />
    </>
  );
};

// ====================================================================== //

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
