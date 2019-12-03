import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export default function YearSelection({onChange}) {
  const dateNow = moment();
  const years = [];
  const nextTwelve = moment().set('year', dateNow.format('YYYY')).add(12, 'y');

  function getDates(startDate, stopDate) {
    const dateArray = [];
    let currentDate = moment(startDate);
    const endDate = moment(stopDate);
    while (currentDate <= endDate) {
      dateArray.push(moment(currentDate).format('YYYY'));
      currentDate = moment(currentDate).add(1, 'year');
    }
    return dateArray;
  }

  function changeYear(year) {
    onChange(year);
  }

  const twelveYears = getDates(dateNow, nextTwelve);

  twelveYears.forEach((year) => {
    years.push(
      <td
        key={year}
        className="calendar-year"
        onClick={() => {
          changeYear(year);
        }}>
        <span>{year}</span>
      </td>,
    );
  });
  const rows = [];
  let cells = [];

  years.forEach((row, i) => {
    if (i % 3 !== 0 || i === 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
  });
  rows.push(cells);
  const yearlist = rows.map((d, i) => {
    return <tr key={`year ${i}`}>{d}</tr>;
  });

  return (
    <table className="calendar-navi year">
      <tbody>{yearlist}</tbody>
    </table>
  );
}

YearSelection.propTypes = {
  dateObject : PropTypes.object,
  onChange   : PropTypes.func,
};
