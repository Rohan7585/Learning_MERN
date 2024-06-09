import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div>
      <h1>Usage of useState Hook</h1>
      <Counter initialValue={5} />
    </div>
  );
}

export default App;