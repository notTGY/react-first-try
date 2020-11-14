import React, { useState } from "react";
import "./DayManager.css";
import MonthData from "../data/MonthData";

const monthData = MonthData();

let hook;

export function focusDate(d, m) {
  hook({ day: d, month: monthData[m].name });
}

function DayManager({ isDayShown, day, month }) {
  const [focus, setFocus] = useState({ day, month: monthData[month].name });
  hook = setFocus;

  return (
    <div className="DayManagerWrapper">
      {(isDayShown => {
        return (
          <div className="container">
            <span className="_day">{focus.day}</span>
            <span className="_month">{focus.month}</span>
          </div>
        );
      })()}
    </div>
  );
}

export default DayManager;