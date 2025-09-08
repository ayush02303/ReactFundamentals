import { useState } from "react";

export default function Updater() {
  const [num, setNum] = useState(0);

  function increment() {
    setNum((n) => n + 1);
    setNum((n) => n + 1);
    setNum((n) => n + 1);
  }

  function decrement() {
    setNum((n) => n - 1);
    setNum((n) => n - 1);
    setNum((n) => n - 1);
  }

  function setReset() {
    setNum((c) => (c = 0));
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <span>{num}</span>
      <button onClick={decrement}>Decrement</button>
      <button onClick={setReset}>reset</button>
    </div>
  );
}
