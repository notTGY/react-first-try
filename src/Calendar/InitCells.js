import React from "react";
import MonthData from "../data/MonthData";

const monthData = MonthData();

let cells = [];

function initCells() {
  let offset = 6;
  let curDate = new Date();
  let prevMonthMaxDate = monthData[curDate.getMonth() - 1].days;
  let thisMonthMaxDate = monthData[curDate.getMonth()].days;

  if (thisMonthMaxDate === 28) {
    if (curDate.getYear() % 4 === 0) {
      thisMonthMaxDate++;
      if (curDate.getYear() % 100 === 0 && curDate.getYear() % 400 !== 0) {
        thisMonthMaxDate--;
      }
    }
  } else if (prevMonthMaxDate === 28) {
    if (curDate.getYear() % 4 === 0) {
      prevMonthMaxDate++;
      if (curDate.getYear() % 100 === 0 && curDate.getYear() % 400 !== 0) {
        prevMonthMaxDate--;
      }
    }
  }

  for (var i = 1; i < 43; i++) {
    let row = Math.floor((i - 1) / 7);
    let col = i - 1 - row * 7;
    if (col === 0) {
      cells[row] = [];
    }
    if (i <= offset) {
      cells[row][col] = {
        shown: false,
        date: prevMonthMaxDate - offset + i,
        month: curDate.getMonth() - 1
      };
    } else if (i - offset <= thisMonthMaxDate) {
      cells[row][col] = {
        shown: true,
        date: i - offset,
        month: curDate.getMonth()
      };
    } else {
      cells[row][col] = {
        shown: false,
        date: i - offset - thisMonthMaxDate,
        month: curDate.getMonth() + 1
      };
    }
  }
  return cells;
}

export default initCells;
