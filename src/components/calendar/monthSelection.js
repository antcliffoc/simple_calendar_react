import React, {useState} from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export default function MonthSelection({dateObject, onChange}) {
  const [allMonths] = useState(moment.months());
  const months = [];

  function changeMonth(index) {
    onChange(index);
  }

  allMonths.forEach((month, i) => {
    months.push(
        <td key={`${i}`}
          className="month-name"
          onClick={() => changeMonth(`${i}`)}>{month}</td>,
    );
  });

  const rows = [];
  let cells = [];
  months.forEach((row, i) => {
    if (i % 3 !== 0 || i === 0) { // except zero index
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
  });
  rows.push(cells); // add last row

  const monthlist = rows.map((row, i) => {
    return <tr key={i}>{row}</tr>;
  });
  return (
    <div>
      <div className="selected-month">{dateObject.format('MMMM')}</div>
      <table className="calendar-navi">
        <tbody>{monthlist}</tbody>
      </table>
    </div>
  );
}

MonthSelection.propTypes = {
  dateObject: PropTypes.any,
  onChange: PropTypes.func,
};
