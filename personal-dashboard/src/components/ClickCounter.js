import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked {count} times</p>
    </div>
  );
};

export default ClickCounter;