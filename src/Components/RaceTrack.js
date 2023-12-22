// RaceTrack.js

import React, { useEffect, useState } from 'react';
import './RaceTrack.css';

const RaceTrack = ({ participants, onFinishRace }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((time) => time + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleFinishRace = () => {
    onFinishRace(true);
  };

  return (
    <div className='race-container'>
      <div className='race-container-1'>
        <div className='race-container-2'>
          <div className='race-container-3'>
          <div className='race-container-4'>
          <h2 >Race Track</h2>
          <div type="time" style={{ margin:'10px' }}>Elapsed Time: {elapsedTime} seconds</div>
        <p className="track-length">Track length 400m</p>
        <button className="button" onClick={handleFinishRace}>Finish Race</button>
          </div>
          
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default RaceTrack;

