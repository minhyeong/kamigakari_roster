import React from "react";
import ReactDOM from "react-dom/client";

class Test extends React.Component {
  render() {
    return (
      <div>
        <h1>h1!</h1>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Test />);
