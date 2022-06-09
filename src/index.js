import React from "react";
import ReactDOM from "react-dom/client";

// キャラシコンポーネント
import Personal from "./components/personal";
import Ability from "./components/ability";
import Talent from "./components/talent";
import Equipment from "./components/equipment";
import Trade from "./components/trade";
import Growth from "./components/growth";
import Etc from "./components/etc";
import Memo from "./components/memo";

class Root extends React.Component {
  render() {
    return (
      <div>
        <Personal />
        <Ability />
        <Talent />
        <Equipment />
        <Trade />
        <Growth />
        <Etc />
        <Memo />
      </div>
    );
  }
}

// ====================================================================== //

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
