import React, { useEffect } from 'react';

function TransportDetails({ transport, onBook, onBack }) {
  useEffect(() => {
    if (transport && transport.name) {
      const timer = setTimeout(() => {
        alert(`🚨 The transport "${transport.name}" is arriving soon! Get ready!`);
      }, 3000);
  
      return () => clearTimeout(timer);
    }
  }, [transport]);
  
  return (
    <div className="transport-details">
      <h2>Details of {transport.from} Selected Transport {transport.to}</h2>
      
      <p><strong>Arrival Time:</strong> {transport.arrival}</p>
      <p><strong>Departure Time:</strong> {transport.departure}</p>
      <p><strong>Status:</strong> {transport.status}</p>
      
      {/* Estimated Delay */}
      <p>
        <strong>Estimated Delay:</strong> {transport.delay} minutes
      </p>

      {/* Ticket Price */}
      <p>
        <strong>Ticket Price:</strong> {transport.ticketPrice}
      </p>

      {/* Seat Status */}
      <p>
        <strong>Seat Status:</strong> {transport.seatStatus}
      </p>

      <button onClick={onBook}>🎟️ Book This Transport</button>
      <button onClick={onBack} style={{ marginLeft: "10px" }}>⬅️ Back</button>
    </div>
  );
}

export default TransportDetails;
