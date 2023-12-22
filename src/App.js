// App.js


import React, { useState } from 'react';
import ParticipantEntryForm from './Components/ParticipantEntryForm';
import ParticipantList from './Components/ParticipantList';
import RaceTrack from './Components/RaceTrack';
import RaceResultsPopup from './Components/RaceResultsPopup';
import './App.css';

const App = () => {
  const [participants, setParticipants] = useState([]);
  const [raceStarted, setRaceStarted] = useState(false);
  const [raceResults, setRaceResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const handleParticipantSubmit = (newParticipants) => {
    setParticipants(newParticipants);
    setRaceStarted(true);
  };

  const handleFinishRace = () => {
    // Assume the race finishes after 60 seconds (for demonstration purposes)
    const raceDuration = 60;
    
    // Calculate race results based on elapsed time and participant speed
    const results = participants.map((participant) => {
      const timeTaken = (raceDuration / participant.speed) * elapsedTime; // Calculate time taken based on speed
      return { ...participant, endTime: timeTaken.toFixed(2) };
    });

    // Sort results by time
    results.sort((a, b) => parseFloat(a.endTime) - parseFloat(b.endTime));

    // Update state with the results
    setRaceResults(results);
    setShowResults(true);
  };

  const handleCloseResults = () => {
    setShowResults(false);
    setRaceStarted(false);
    setParticipants([]);
    setRaceResults([]);
    setElapsedTime(0);
  };

  return (
    <div style={{backgroundColor:'white',textAlign:'center', display: 'flex',flexWrap:'wrap', justifyContent: 'space-between', padding: '20px' }}>
      <div className='participations'>
      <ParticipantEntryForm onSubmit={handleParticipantSubmit} />
      <ParticipantList participants={participants} />
      </div>
      <br/>
      <div>
      <div className='race-track'>
      
      {showResults && <RaceResultsPopup results={raceResults} onClose={handleCloseResults} />}
      {raceStarted && <RaceTrack participants={participants} onFinishRace={handleFinishRace} />}
      </div>
      </div>
    </div>
  );
};

export default App;


