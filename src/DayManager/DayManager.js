import React, { useState } from "react";
import "./DayManager.css";
import MonthData from "../data/MonthData";

const monthData = MonthData();

let hook;
let second_hook;

export function focusDate(d, m, date) {
  hook({ day: d, month:m, date: date});
}

function DayManager({ isDayShown, day, month, date }) {
  const [focus, setFocus] = useState({ day, month, date });
  hook = setFocus;
  second_hook = focus;

  return (
    <div className="DayManagerWrapper">
      {(isDayShown => {
        return (
          <div className="container">
            <span className="_day">{focus.day}</span>
            <span className="_month">{monthData[focus.month].name}</span>
          </div>
        );
      })()}
    </div>
  );
}

function getDayOfWeek() {
  const dat = second_hook.date;
  const dow = dat.getDay();
  if (dow == 0) {
    return 6;
  }
  return dow-1;
}

export {getDayOfWeek};
export default DayManager;
