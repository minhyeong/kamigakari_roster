import React from "react";
import ReactDOM from "react-dom/client";

// キャラシコンポーネント
import Personal from "./components/personality";
import Ability from "./components/ability";
import Equipment from "./components/equipment";
import Talents from "./components/talents";

class Root extends React.Component {
  render = () => {
    return (
      <div>
        <Personal />
        <Ability />
        <Equipment />
        <Talents />
      </div>
    );
  };
}

// ====================================================================== //

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
