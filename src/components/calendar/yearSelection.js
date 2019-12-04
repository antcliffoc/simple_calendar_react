import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export default function YearSelection({onChange}) {
  const dateNow = moment().format('YYYY');
  const years = [];
  const nextFive = moment().set('year', dateNow).add(7, 'y');
  const prevSix = moment().set('year', dateNow).subtract(7, 'y');

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

  const fifteenYears = getDates(prevSix, nextFive);

  fifteenYears.forEach((year) => {
    const isCurrentYear =

        year === dateNow ? 'today' :
        '';
    years.push(
      <td
        key={year}
        className={`calendar-year ${isCurrentYear}`}
        onClick={() => {
          changeYear(year);
        }}>
        <span>{year}</span>
      </td>,
    );
  });
  const rows = [];
  let cells = [];

  years.forEach((year, i) => {
    if (i % 3 !== 0 || i === 0) {
      cells.push(year);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(year);
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
