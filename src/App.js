import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import LocationSelection from './components/LocationSelection';
import TransportModeSelection from './components/TransportModeSelection';
import TransportList from './components/TransportList';
import TransportDetails from './components/TransportDetails';
import LoginPage from './components/LoginPage'; 
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [mode, setMode] = useState('');
  const [selectedTransport, setSelectedTransport] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleStart = () => setStep(2);
  const handleLocationSelect = (from, to) => {
    setFrom(from);
    setTo(to);
    setStep(3);
  };
  const handleModeSelect = (mode) => {
    setMode(mode);
    setStep(4);
  };
  const handleTransportSelect = (transport) => {
    setSelectedTransport(transport);
    setStep(5);
  };
  const handleBooking = () => {
    setBookingSuccess(true);
  };
  const handleBack = () => {
    if (bookingSuccess) {
      setBookingSuccess(false);
      setStep(1);
      setFrom('');
      setTo('');
      setMode('');
      setSelectedTransport(null);
    } else if (step > 1) {
      if (step === 5) {
        setSelectedTransport(null);
      } else if (step === 4) {
        setMode('');
      } else if (step === 3) {
        setFrom('');
        setTo('');
      }
      setStep(step - 1);
    }
  };

  // Handle login success
  const handleLoginSuccess = (username) => {
    setIsLoggedIn(true);
    console.log(`Logged in as: ${username}`);
  };

  if (!isLoggedIn) {
    return (
      <Router>
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      </Router>
    );
  }

  return (
    <div className="App">
      {step === 1 && <WelcomeScreen onStart={handleStart} />}
      {step === 2 && <LocationSelection onSelect={handleLocationSelect} onBack={handleBack} />}
      {step === 3 && <TransportModeSelection onModeSelect={handleModeSelect} onBack={handleBack} />}
      {step === 4 && <TransportList selectedMode={mode} onTransportSelect={handleTransportSelect} onBack={handleBack} />}
      {step === 5 && selectedTransport && (
        <TransportDetails transport={selectedTransport} onBook={handleBooking} onBack={handleBack} />
      )}
      {bookingSuccess && (
        <div className="booking-success">
          <p className="success-message">🎉 Booking Successful! Happy Journey!</p>
          <button className="back-button" onClick={handleBack}>⬅️ Back to Home</button>
        </div>
      )}
    </div>
  );
}

export default App;
