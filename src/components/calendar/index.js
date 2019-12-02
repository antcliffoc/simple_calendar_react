import React, {useState} from 'react';
import moment from 'moment';
import './calendar.css';
import DaysOfWeek from './daysOfWeek';
import DaysInMonth from './daysInMonth';
import MonthSelection from './monthSelection';

export default function Calendar(props) {
  const [dateObject, setDateObject] = useState(moment());

  function handleMonthChange(index) {
    setDateObject(moment(dateObject).set('month', index));
  }

  return (
    <div className="calendar-container">
      <MonthSelection dateObject={dateObject} onChange={handleMonthChange}/>
      <table className="calenday-day">
        <thead>
          <DaysOfWeek />
        </thead>
        <DaysInMonth dateObject={dateObject} />
      </table>
    </div>
  );
}
