import React, {useState} from 'react';
import moment from 'moment';
import './calendar.css';
import DaysOfWeek from './daysOfWeek';
import DaysInMonth from './daysInMonth';
import MonthSelection from './monthSelection';
import YearSelection from './yearSelection';

export default function Calendar(props) {
  const [dateObject, setDateObject] = useState(moment());
  const [showMonths, setShowMonths] = useState(false);
  const [showCalendar, setShowCalendar] = useState(true);
  const [showYears, setShowYears] = useState(false);

  function handleMonthChange(index) {
    setDateObject(moment(dateObject).set('month', index));
    toggleSelection('month');
  }

  function handleYearChange(year) {
    setDateObject(moment(dateObject).set('year', year));
    toggleSelection('year');
  }

  function toggleMonthTable() {
    setShowYears(false);
    setShowCalendar(showMonths);
    setShowMonths(!showMonths);
  }

  function toggleYearTable() {
    setShowMonths(false);
    setShowCalendar(showYears);
    setShowYears(!showYears);
  }

  function toggleSelection(selection) {
    switch (selection) {
      case 'year':
        toggleYearTable();
        break;
      case 'month':
        toggleMonthTable();
        break;
      default:
        break;
    }
  }

  return (
    <div className="calendar-container">
      <div className="calendar-title">
        <span
          className="selected-month"
          onClick={() => toggleSelection('month')}>
          {dateObject.format('MMMM')}
        </span>
        <span className="selected-year" onClick={() => toggleSelection('year')}>
          {dateObject.format('Y')}
        </span>
      </div>
      {showMonths && (
        <MonthSelection dateObject={dateObject} onChange={handleMonthChange} />
      )}
      {showYears && (
        <YearSelection dateObject={dateObject} onChange={handleYearChange} />
      )}
      {showCalendar && (
        <table className="calenday-day">
          <thead>
            <DaysOfWeek />
          </thead>
          <DaysInMonth dateObject={dateObject} />
        </table>
      )}
    </div>
  );
}
