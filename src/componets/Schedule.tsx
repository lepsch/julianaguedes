import React from 'react';

import Button, { ButtonTheme } from './Button';
import physicianDesk from '../assets/physician-desk.jpg';
import './Schedule.scss';

function Schedule() {
  return <div className='Schedule'>
    <div className='text'>
      <p>Chegou a hora de realçar ainda mais a beleza que já existe em você!</p>
      <Button theme={ ButtonTheme.dark }>Agende uma consulta</Button>
    </div>
    <img src={ physicianDesk } />
  </div>
}

export default Schedule;
