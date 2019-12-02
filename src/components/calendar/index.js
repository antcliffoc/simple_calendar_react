import React, {useState} from 'react';
import moment from 'moment';
import './calendar.css';
import DaysOfWeek from './daysOfWeek';
import DaysInMonth from './daysInMonth';

export default function Calendar(props) {
  const [dateObject] = useState(moment());

  return (
    <div className="calendar-container">
      <div className="calendar-navi">{dateObject.format('MMMM')}</div>
      <table className="calenday-day">
        <thead>
          <DaysOfWeek />
        </thead>
        <DaysInMonth dateObject={dateObject}/>
      </table>
    </div>
  );
}
