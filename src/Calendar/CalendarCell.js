import React from "react";
import "./Calendar.css";
import { focusDate } from "../DayManager/DayManager";

function clickHandler(d, m) {
  focusDate(d, m);
}

const styles = {
  transparent: {
    opacity: "0.3"
  },
  good: {
    opacity: "1"
  },
  now: {
    border: "2px solid #CC2"
  }
};

function CalendarCell({ date, isShown, month }) {
  function isNow(d, m) {
    const dat = new Date();
    if (dat.getMonth() === m && dat.getDate() === d) {
      return true;
    }
    return false;
  }
  const now = isNow(date, month);
  return (
    <td
      className="CalendarCell"
      onClick={clickHandler.bind(null, date, month)}
      style={isShown ? (now ? styles.now : styles.good) : styles.transparent}
    >
      {date}
    </td>
  );
}

export default CalendarCell;
