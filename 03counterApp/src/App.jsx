import "./App.css";
import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(0);

  const incrementValue = () => setCounter(++counter);
  const decrementValue = () =>
    counter - 1 >= 0 ? setCounter(--counter) : setCounter(counter);
  return (
    <>
      <h1>Counter App</h1>
      <br />
      <h2>Current Count : {counter}</h2>
      <br />
      <div>
        {" "}
        <button onClick={incrementValue}>Add by 1</button>{" "}
        <button onClick={decrementValue}>Reduce by 1</button>
        <h5>Value cant decrement below 0</h5>
      </div>
    </>
  );
}

export default App;
