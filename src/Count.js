import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(25);

  return (
    <>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <div>
        <h2>Age:{age}</h2>
        <button onClick={() => setAge(age + 1)}>Age Count</button>
      </div>
    </>
  );
}

export default Counter;
