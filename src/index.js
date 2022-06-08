import React from "react";
import ReactDOM from "react-dom/client";

class Personal extends React.Component {
  render() {
    return <div>パーソナルデータ</div>;
  }
}

class Ability extends React.Component {
  render() {
    return <div>能力値・判定値</div>;
  }
}

class Talent extends React.Component {
  render() {
    return <div>特性・タレント</div>;
  }
}

class Equipment extends React.Component {
  render() {
    return <div>武器防具装飾品・強化</div>;
  }
}

class Trade extends React.Component {
  render() {
    return <div>購入・売却履歴</div>;
  }
}

class Growth extends React.Component {
  render() {
    return <div>成長履歴</div>;
  }
}

// ========================================

const personal = ReactDOM.createRoot(document.getElementById("personal"));
personal.render(<Personal />);

const ability = ReactDOM.createRoot(document.getElementById("ability"));
ability.render(<Ability />);

const talent = ReactDOM.createRoot(document.getElementById("talent"));
talent.render(<Talent />);

const equipment = ReactDOM.createRoot(document.getElementById("equipment"));
equipment.render(<Equipment />);

const trade = ReactDOM.createRoot(document.getElementById("trade"));
trade.render(<Trade />);

const growth = ReactDOM.createRoot(document.getElementById("growth"));
growth.render(<Growth />);
