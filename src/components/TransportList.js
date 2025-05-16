import React from 'react';

function TransportList({ selectedMode, onTransportSelect, onBack }) {

  const transports = {
    bus: [
      { id: 1, name: 'M28', arrival: '12:30 PM', departure: '12:40 PM', status: 'On Time', traffic: 'Moderate', delay: 0, ticketPrice: '₹ 20', seatStatus: 'Available' },
      { id: 2, name: 'G202', arrival: '1:00 PM', departure: '1:15 PM', status: 'Delayed', traffic: 'Heavy', delay: 5, ticketPrice: '₹ 25', seatStatus: 'Available' },
      { id: 3, name: 'B30', arrival: '2:00 PM', departure: '2:20 PM', status: 'On Time', traffic: 'Light', delay: 0, ticketPrice: '₹ 15', seatStatus: 'Full' },
      { id: 4, name: 'C56', arrival: '12:20 PM', departure: '12:50 PM', status: 'On Time', traffic: 'Moderate', delay: 0, ticketPrice: '₹ 20', seatStatus: 'Available' },
      { id: 5, name: 'G77', arrival: '1:15 PM', departure: '1:15 PM', status: 'Delayed', traffic: 'Heavy', delay: 5, ticketPrice: '₹ 25', seatStatus: 'Available' },
      { id: 6, name: 'M101', arrival: '3:00 PM', departure: '3:20 PM', status: 'On Time', traffic: 'Light', delay: 0, ticketPrice: '₹ 18', seatStatus: 'Available' },
      { id: 7, name: 'B45', arrival: '4:30 PM', departure: '4:50 PM', status: 'On Time', traffic: 'Moderate', delay: 0, ticketPrice: '₹ 22', seatStatus: 'Available' },
      { id: 8, name: 'S12', arrival: '5:00 PM', departure: '5:10 PM', status: 'Delayed', traffic: 'Heavy', delay: 10, ticketPrice: '₹ 30', seatStatus: 'Full' },
    ],
    train: [
      { id: 1, name: 'Chennai Express', arrival: '1:00 PM', departure: '1:10 PM', status: 'Delayed', traffic: 'Heavy', delay: 10, ticketPrice: '₹ 50', seatStatus: 'Available' },
      { id: 2, name: 'J56', arrival: '2:30 PM', departure: '2:40 PM', status: 'On Time', traffic: 'Light', delay: 0, ticketPrice: '₹ 60', seatStatus: 'Available' },
      { id: 3, name: 'T Central', arrival: '3:00 PM', departure: '3:10 PM', status: 'On Time', traffic: 'Moderate', delay: 2, ticketPrice: '₹ 45', seatStatus: 'Full' },
      { id: 4, name: 'H56', arrival: '4:00 PM', departure: '4:15 PM', status: 'On Time', traffic: 'Light', delay: 0, ticketPrice: '₹ 55', seatStatus: 'Available' },
      { id: 5, name: 'Express 9', arrival: '5:15 PM', departure: '5:30 PM', status: 'Delayed', traffic: 'Heavy', delay: 8, ticketPrice: '₹ 65', seatStatus: 'Available' },
      { id: 6, name: 'SuperFast 300', arrival: '6:00 PM', departure: '6:15 PM', status: 'On Time', traffic: 'Light', delay: 0, ticketPrice: '₹ 75', seatStatus: 'Full' },
    ],
    metro: [
      { id: 1, name: 'Metro 157', arrival: '1:30 PM', departure: '1:40 PM', status: 'On Time', traffic: 'Light', delay: 0, ticketPrice: '₹ 30', seatStatus: 'Available' },
      { id: 2, name: 'Metro B12', arrival: '2:00 PM', departure: '2:15 PM', status: 'On Time', traffic: 'Light', delay: 0, ticketPrice: '₹ 35', seatStatus: 'Available' },
      { id: 3, name: 'Metro B256', arrival: '3:00 PM', departure: '3:10 PM', status: 'Delayed', traffic: 'Heavy', delay: 10, ticketPrice: '₹ 40', seatStatus: 'Full' },
      { id: 4, name: 'Metro 100', arrival: '4:00 PM', departure: '4:20 PM', status: 'On Time', traffic: 'Light', delay: 0, ticketPrice: '₹ 32', seatStatus: 'Available' },
      { id: 5, name: 'Metro D9', arrival: '5:00 PM', departure: '5:15 PM', status: 'On Time', traffic: 'Light', delay: 0, ticketPrice: '₹ 37', seatStatus: 'Available' },
      { id: 6, name: 'Metro 320', arrival: '6:00 PM', departure: '6:15 PM', status: 'Delayed', traffic: 'Heavy', delay: 7, ticketPrice: '₹ 38', seatStatus: 'Full' },
    ],
  };

  const selectedTransports = transports[selectedMode.toLowerCase()] || [];

  return (
    <div className="transport-list">
      <h2>Select Your Transport</h2>
      <p>Selected Mode: {selectedMode}</p>
      <div>
        {selectedTransports.length > 0 ? (
          selectedTransports.map((transport) => (
            <div key={transport.id} className="transport-card">
              <h3>{transport.name}</h3>
              
            
              <button onClick={() => onTransportSelect(transport)}>View Details</button>
            </div>
          ))
        ) : (
          <p>No transports available for the selected mode.</p>
        )}
      </div>

      {/* Back Button */}
      <button onClick={onBack} style={{ marginLeft: "10px" }}>⬅️ Back</button>
    </div>
  );
}

export default TransportList;
