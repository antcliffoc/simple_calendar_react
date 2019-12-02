import React, {useState} from 'react';
import moment from 'moment';

export default function MonthList(props) {
  const [allMonths] = useState(moment.months());
  return (
    <div>{allMonths}</div>
  );
}
