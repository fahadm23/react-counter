import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="app">
      <div className="title"></div>
      <h1>React Counter App</h1>
      <div className="counter">
        <button onClick={subtract}>
          <h2>-</h2>
        </button>
        <h2>{count}</h2>
        <button onClick={add}>
          <h2>+</h2>
        </button>
      </div>
    </div>
  );
}
