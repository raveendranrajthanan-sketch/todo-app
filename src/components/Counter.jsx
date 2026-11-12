
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
      <p className="counter-label">Your Progress</p>

      <h3 className="counter-number">{count}</h3>

      <p>Times clicked</p>

      <div className="counter-actions">
        <button onClick={() => setCount(count + 1)}>
          +1
        </button>

        <button
          onClick={() => setCount(0)}
          disabled={count === 0}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
