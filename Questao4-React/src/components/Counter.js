import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const stopCounter = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <h1>CONTADOR</h1>
      <div class="card">
        <h1>Contador: {count}</h1>
        <button onClick={stopCounter}>Parar Contador</button>
      </div>
    </div>
  );
}

export default Counter;
