import React, { useContext } from "react";
import { CountContext } from "../App";

const ComponentA = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component A - {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>+</button>
      <button onClick={() => countContext.countDispatch("decrement")}>-</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default ComponentA;
