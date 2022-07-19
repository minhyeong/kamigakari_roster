import React from "react";
import ReactDOM from "react-dom/client";
import Personal from "./personality/personality";
import MainStatus from "./status/status-main";
import SubStatus from "./status/status-sub";

class Root extends React.Component {
  render = () => {
    return (
      <>
        <Personal />
        <MainStatus />
        {"<SubStatus />"}
      </>
    );
  };
}

// ====================================================================== //

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
