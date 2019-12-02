import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export default function DaysInMonth({dateObject}) {
  const blanks = [];
  // const [daysInMonth, setDaysInMonth] = useState([])
  function firstDayOfMonth() {
    const firstDay = moment(dateObject).startOf('month').format('d');
    return firstDay;
  }

  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(
        <td key={`blank.${i}`} className="calendar-day empty">{''}</td>,
    );
  }

  function currentDay() {
    if (dateObject.format('MMM') === moment().format('MMM')) {
      return parseInt(dateObject.format('D'));
    } else {
      return false;
    }
  };

  const daysInMonth = [];
  for (let d = 1; d <= moment(dateObject).daysInMonth(); d++) {
    const isToday = d === currentDay() ? 'today' : '';
    daysInMonth.push(
        <td key={d} className={`calendar-day ${isToday}`}>
          {d}
        </td>,
    );
  }

  const totalSlots = [...blanks, ...daysInMonth];
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
  const daysinmonth = rows.map((d, i) => {
    return <tr key={i}>{d}</tr>;
  });

  return (
    <tbody>{daysinmonth}</tbody>
  );
}

DaysInMonth.propTypes = {
  dateObject: PropTypes.any,
};
