// RaceResultsPopup.js

import React from 'react';
import './RaceResultsPopup.css';

const RaceResultsPopup = ({ results, onClose }) => {
  return (
    <div className="race-results-popup" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', borderRadius: '5px',margin:'20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2>Race Results</h2>
      <table className="tableofpopup" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr>
            <th className='position' style={{ paddingRight: '50px'}}>Position</th>
            <th className='name' style={{ paddingRight: '50px'}}>Name</th>
            <th className='start-time' style={{ paddingRight: '50px'}}>Start Time</th>
            <th className='end-time' style={{ paddingRight: '50px'}}>End Time</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr style={{textAlign:'center'}} key={index}>
              <td className='position' style={{ paddingRight: '50px'}}>{index + 1}</td>
              <td className='name' style={{ paddingRight: '50px'}}>{result.name || '-'}</td>
              <td className='start-time' style={{ paddingRight: '50px'}}>{result.startTime || '-'}</td>
              <td className='end-time' style={{ paddingRight: '50px'}}>{result.endTime || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px' }}>
        <button className="back-button" onClick={onClose}>Back to Home</button>
        <button className="restart-button" onClick={onClose}>Restart Race</button>
      </div>
    </div>
  );
};

export default RaceResultsPopup;
