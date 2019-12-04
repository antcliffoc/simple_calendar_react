import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export default function DaysInMonth({dateObject, selectedDate, onSelection}) {
  const blanks = [];
  const daysInMonth = [];

  function firstDayOfMonth() {
    const firstDay = moment(dateObject).startOf('month').format('d');
    return firstDay;
  }
  // populate blanks.
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(
      <td key={`blank.${i}`} className="calendar-day empty">
        {''}
      </td>,
    );
  }
  // populate days in month
  for (let d = 1; d <= moment(dateObject).daysInMonth(); d++) {
    // create a date id for each day
    const dateFormatted = moment(dateObject)
      .set('date', d)
      .format('YYYY-MM-DD');
    // check to see if date is today
    // this is using ternary expression.
    const isToday =

        d === currentDay() ? 'today' :
        '';
    // check to see if date is selected
    // this is using ternary expression.
    const isSelected =

        dateFormatted === selectedDate ? 'selected' :
        '';
    // add td for each day of month
    daysInMonth.push(
      <td
        key={d}
        id={dateFormatted}
        className={`calendar-day ${isToday} ${isSelected}`}
        onClick={() => {
          clickOnDay(d);
        }}>
        {d}
      </td>,
    );
  }

  function currentDay() {
    if (
      dateObject.format('MMM') === moment().format('MMM') &&
      dateObject.format('YYYY') === moment().format('YYYY')
    ) {
      return parseInt(dateObject.format('D'));
    } else {
      return false;
    }
  }

  function clickOnDay(day) {
    // const dateClicked = moment(dateObject)
    //   .set('date', day)
    //   .format('YYYY-MM-DD');
    // setSelectedDate(dateClicked);
    onSelection(day);
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
    if (i === totalSlots.length - 1) {
      // when end loop we add remain date
      rows.push(cells);
    }
  });

  const daysinmonth = rows.map((d, i) => {
    return <tr key={i}>{d}</tr>;
  });

  return <tbody>{daysinmonth}</tbody>;
}

DaysInMonth.propTypes = {
  dateObject   : PropTypes.object,
  selectedDate : PropTypes.object,
  onSelection  : PropTypes.func,
};
