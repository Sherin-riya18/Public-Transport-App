import React, { useState } from 'react';

const chennaiStops = [
  'Tambaram',
  'Guindy',
  'T Nagar',
  'Anna Nagar',
  'Chennai Central',
  'Egmore',
  'Adyar',
  'Alandur',
  'Perambur',
  'Vadapalani',
  'Mylapore',
  'Ashok Nagar',
  'Pondy Bazaar',
  'Royapettah',
  'Nungambakkam',
  'Chetpet',
  'Kilpauk',
  'Kodambakkam',
  'Velachery',
  'Mount Road',
];

function LocationSelection({ onSelect }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (from && to && from !== to) {
      onSelect(from, to);
    } else {
      alert("Please select different FROM and TO locations.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="selection-form">
      <h2>Select Your Journey</h2>
      
      {/* From Location Dropdown */}
      <select value={from} onChange={(e) => setFrom(e.target.value)} required>
        <option value="">Select From</option>
        {chennaiStops.map((stop, index) => (
          <option key={index} value={stop}>{stop}</option>
        ))}
      </select>

      {/* To Location Dropdown */}
      <select value={to} onChange={(e) => setTo(e.target.value)} required>
        <option value="">Select To</option>
        {chennaiStops.map((stop, index) => (
          <option key={index} value={stop}>{stop}</option>
        ))}
      </select>

      <button type="submit">Next</button>
    </form>
  );
}

export default LocationSelection;
