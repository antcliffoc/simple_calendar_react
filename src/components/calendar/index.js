import React, {useState} from 'react';
import moment from 'moment';
import './calendar.css';
import DaysOfWeek from './daysOfWeek';
import DaysInMonth from './daysInMonth';
import MonthSelection from './monthSelection';

export default function Calendar(props) {
  const [dateObject, setDateObject] = useState(moment());
  const [showMonths, setShowMonths] = useState(false);

  function handleMonthChange(index) {
    setDateObject(moment(dateObject).set('month', index));
    toggleMonthTable();
  }

  function toggleMonthTable() {
    setShowMonths(!showMonths);
  }

  return (
    <div className="calendar-container">
      <div className="selected-month"
        onClick={() => toggleMonthTable()}>
        {dateObject.format('MMMM')}
      </div>
      {/* eslint-disable-next-line max-len */}
      {showMonths && <MonthSelection dateObject={dateObject} onChange={handleMonthChange} />}
      {!showMonths && <table className="calenday-day">
        <thead>
          <DaysOfWeek />
        </thead>
        <DaysInMonth dateObject={dateObject} />
      </table>}
    </div >
  );
}
