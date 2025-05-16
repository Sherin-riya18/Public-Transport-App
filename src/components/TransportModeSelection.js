import React from 'react';

function TransportModeSelection({ onModeSelect, onBack }) {
  return (
    <div className="mode-selection">
      <h2>Select Transport Mode</h2>
      <button onClick={() => onModeSelect('Bus')}>Bus</button>
      <button onClick={() => onModeSelect('Metro')}>Metro</button>
      <button onClick={() => onModeSelect('Train')}>Train</button>

      <button onClick={onBack} style={{ marginLeft: "10px" }}>⬅️ Back</button>
    </div>
  );
}

export default TransportModeSelection;
