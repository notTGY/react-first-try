import React from "react";
import "./Calendar.css";
import CalendarCell from "./CalendarCell";

function CalendarRow({ arr, num }) {
  return (
    <tr>
      {arr.map((item, i) => {
        if (item.shown) {
          return (
            <CalendarCell
              date={item.date}
              month={item.month}
              isShown={1}
              key={(i + 1) * (num + 1)}
            />
          );
        } else {
          return (
            <CalendarCell
              date={item.date}
              month={item.month}
              isShow={0}
              key={(i + 1) * (num + 1)}
            />
          );
        }
      })}
    </tr>
  );
}

export default CalendarRow;
