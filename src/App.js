import React from "react";
import "./App.css";

export default function App() {
  /**
   * Challenge:
   * Add functionality to the minus button
   */
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function minus() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={minus}>
        –
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={add}>
        +
      </button>
    </div>
  );
}

/**
 * Note: if you ever need the old value of state
 * to help you determine the new value of state,
 * you should pass a callback function to your
 * state setter function instead of using
 * state directly. This callback function will
 * receive the old value of state as its parameter,
 * which you can then use to determine your new
 * value of state.
 */
//    function add() {
//     setCount(prevCount => prevCount + 1)
// }
