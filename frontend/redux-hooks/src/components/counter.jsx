import React from "react";
import { useSelector, useDispatch } from "react-redux";
export default function Counter() {
  const counter = useSelector((state) => state.CounterReducer.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
