import React from "react";
import ActualTimetableRow from "./ActualTimetableRow";
import "../Timetable.css";

function ActualTimetable({ bigData, paraData }) {
  return (
    <table className="TimetableTable">
      <tbody>
        {paraData.map((item, i) => {
          return (
            <ActualTimetableRow time={item.value} para={bigData[i]} key={i} />
          );
        })}
      </tbody>
    </table>
  );
}

export default ActualTimetable;
