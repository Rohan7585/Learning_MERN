import React, { useState } from 'react';

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 10)}>Increment</button>
      <button onClick={() => setCount(count - 10)}>Decrement</button>
    </div>
  );
}

export default Counter;