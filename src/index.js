import React from "react";
import ReactDOM from "react-dom/client";
import Personal from "./personality/personality";

class Root extends React.Component {
  render = () => {
    return (
      <>
        <Personal />
      </>
    );
  };
}

// ====================================================================== //

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
