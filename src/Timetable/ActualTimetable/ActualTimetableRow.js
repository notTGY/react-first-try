import React from "react";
import '../Timetable.css'

function ActualTimetableRow({ time, para }) {
  return (
    <tr>
      <td className="TimetableTd">{time}</td>
      <td className="TimetableTd">{para.value}</td>
    </tr>
  );
}

export default ActualTimetableRow;
