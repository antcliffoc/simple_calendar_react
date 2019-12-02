import React from 'react';
import moment from 'moment';

export default function DaysOfWeek(props) {
  const weekdayshort = moment.weekdaysShort();
  const weekdayshortname = weekdayshort.map((day) => {
    return (<th key={day} className="week-day">
      {day}
    </th>);
  });

  return (
    <tr>{weekdayshortname}</tr>
  );
}
