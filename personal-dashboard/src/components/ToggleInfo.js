import React, { useState } from 'react';

const ToggleInfo = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? 'Hide Info' : 'Show Info'}
      </button>
      {showInfo && <p>This is the additional information.</p>}
    </div>
  );
};

export default ToggleInfo;