import React, {useState} from 'react';
import moment from 'moment';
import './calendar.css';

export default function Calendar(props) {
  const [dateObject] = useState(moment());
  const [blanks] = useState([]);
  // const [daysInMonth, setDaysInMonth] = useState([])
  const weekdayshort = moment.weekdaysShort();
  const weekdayshortname = weekdayshort.map((day) => {
    return (<th key={day} className="week-day">
      {day}
    </th>);
  });

  function firstDayOfMonth() {
    const firstDay = moment(dateObject).startOf('month').format('d');
    return firstDay;
  }

  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(
        <td className="calendar-day empty">{''}</td>
    );
  }

  function currentDay() {
    return dateObject.format('D');
  };

  const daysInMonth = [];
  for (let d = 1; d <= moment(dateObject).daysInMonth(); d++) {
    const isToday = d == currentDay() ? 'today' : '';
    daysInMonth.push(
        <td key={d} className={`calendar-day ${isToday}`}>
          {d}
        </td>
    );
  }

  const totalSlots= [...blanks, ...daysInMonth];
  const rows = []; // may need ot change back to let
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row); // if index not equal 7 that means not go to next week
    } else {
      // eslint-disable-next-line max-len
      rows.push(cells); // when reach next week we contain all td in last week to rows
      cells = []; // empty container
      // eslint-disable-next-line max-len
      cells.push(row); // in current loop we still push current row to new container
    }
    if (i === totalSlots.length - 1) { // when end loop we add remain date
      rows.push(cells);
    }
  });
  // potential reasign to let
  const daysinmonth = rows.map((d, i) => {
    return <tr key={i}>{d}</tr>;
  });

  return (
    <div className="calendar-container">
      <table className="calenday-day">
        <thead>
          <tr>{weekdayshortname}</tr>
        </thead>
        <tbody>
          {daysinmonth}
        </tbody>
      </table>
    </div>
  );
}
