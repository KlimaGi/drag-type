import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

  }, []);

  return (
    <main>
      <div ref={containerRef} className='container'>
        <div ref={boxRef} className='box'></div>
      </div>
    </main>
  );
}

export default App;
