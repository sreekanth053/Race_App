// ParticipantEntryForm.js

import React, { useState } from 'react';

import './ParticipantEntryForm.css';

const ParticipantEntryForm = ({ onSubmit }) => {
  const [participants, setParticipants] = useState([]);
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [startTime, setStartTime] = useState('');

  const handleAddParticipant = () => {
    setParticipants([...participants, { name, speed, startTime }]);
    setName('');
    setSpeed('');
    setStartTime('');
  };

  const handleSubmit = () => {
    onSubmit(participants);
  };

  return (
    <div style={{ width: '30vw', height: '100vh', border: '0px solid #ccc', padding: '20px' }}>
      {/* <h2>Participant Entry</h2> */}
      <div style={{ width: '25vw', height: '70vh'}} className='entry-form'>
      <form>
        <h3>RUNNER DETAILS</h3>
        <p>*You can add max 10 participants</p>
        <div className='inputs'>
        <label>Name</label> <br/>
        <input style={{'border-radius':'5px',marginTop:'10px',marginBottom:'10px','padding':'10px'}}type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label style={{paddingTop:'10px'}}>Speed</label><br/>
        <input style={{'border-radius':'5px',marginTop:'10px',marginBottom:'10px',padding:'10px','margin-top':'10px'}} type="number" value={speed} onChange={(e) => setSpeed(e.target.value)} />
        <br />
        <label>Start Time</label>
        <br/>
        <input style={{marginTop:'10px',marginBottom:'10px',padding:'10px','border-radius':'5px'}} type="text" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        <br />
        <div style={{'margin-top':'30px'}} className='buttons'>
        <button className='add-button' type="button" onClick={handleAddParticipant}>+ADD RUNNER</button>
        <br />
        <button className='start-button' type="button" onClick={handleSubmit}>Start Race</button>
        </div>
        </div>
      </form>
      </div>
      
    </div>
  );
};

export default ParticipantEntryForm;
