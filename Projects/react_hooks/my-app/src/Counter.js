import React, { useEffect, useState } from 'react';

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue); 
  useEffect(() => {
    document.title = `You've clicked the button ${count} times.`;
  },[count])
  return (
    <div>
      <p>Count: {count}</p>
      <p>You've clicked + {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>You've clicked - {count} times</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;