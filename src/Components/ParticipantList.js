// ParticipantList.js

import React from 'react';
import './ParticipantList.css';

const ParticipantList = ({ participants }) => {
  return (
    <div style={{backgroundColor:'white', borderRadius:'0px',width:'125vh', height: '100vh', border: '50px solid #ccc', padding: '20px' }}>
      <h2>LIST OF PARTICIPANTS</h2>
      <table>
        <thead>
          <tr style={{paddingLeft:'10px'}}>
            <th className='name' style={{ paddingRight: '50px',}}>Name</th>
            <th className='speed' style={{ paddingRight: '50px'}}>Speed</th>
            <th className='start-time' style={{ paddingRight: '50px'}}>Start Time</th>
            <th className='end-time'style={{ paddingRight: '50px'}}>End Time</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => (
            <tr style={{textAlign:'center' }} key={index}>
              <td style={{ paddingRight: '50px',paddingLeft:'0px',textAlign:'center' }}>{participant.name || '-'}</td>
              <td style={{ paddingRight: '50px'}}>{participant.speed || '-'}</td>
              <td style={{ paddingRight: '50px'}}>{participant.startTime || '-'}</td>
              <td style={{ paddingRight: '50px'}}>{participant.endTime || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParticipantList;
