import React from 'react';
import JokeFetcher from './JokeFetcher';

function App() {
  return (
    <div className="App">
      <div class="min-h-screen flex items-center justify-center">
      <div className='grid grid-cols-2 gap-7 w-[64rem]'>
        <JokeFetcher/>
      </div>
    </div>
    </div>
  );
}

export default App;
