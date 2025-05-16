import React from 'react';

function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-screen">
      <h1>ProTRACKER</h1>
      <p>Plan your journey easily and quickly!</p>
      <button onClick={onStart}>Get Started</button>
    </div>
  );
}

export default WelcomeScreen;
