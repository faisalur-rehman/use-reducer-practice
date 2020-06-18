import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      Count : {state}
      <br></br>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
        style={{ margin: 10 + "px" }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        decrement
      </button>
    </>
  );
}
export default Counter;
