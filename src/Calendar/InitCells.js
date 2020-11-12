import React from 'react'

const monthData = [
  {
    "name":"Jan",
    "days": 31
  },
  {
    "name":"Feb",
    "days": 28
  },
  {
    "name":"Mar",
    "days": 31
  },
  {
    "name":"Apr",
    "days": 30
  },
  {
    "name":"May",
    "days": 31
  },
  {
    "name":"Jun",
    "days": 30
  },
  {
    "name":"Jul",
    "days": 31
  },
  {
    "name":"Aug",
    "days": 31
  },
  {
    "name":"Sep",
    "days": 30
  },
  {
    "name":"Oct",
    "days": 31
  },
  {
    "name":"Nov",
    "days": 30
  },
  {
    "name":"Dec",
    "days": 31
  }
];

let cells = [];

function initCells() {
  let offset = 6;
  let curDate = new Date();
  let prevMonthMaxDate = monthData[curDate.getMonth()-1].days;
  let thisMonthMaxDate = monthData[curDate.getMonth()].days;

  if(thisMonthMaxDate === 28) {
    if (curDate.getYear()%4===0) {
      thisMonthMaxDate++;
      if (curDate.getYear()%100===0&&curDate.getYear()%400!==0) {
        thisMonthMaxDate--;
      }
    }
  } else if (prevMonthMaxDate === 28) {
    if (curDate.getYear()%4===0) {
      prevMonthMaxDate++;
      if (curDate.getYear()%100===0&&curDate.getYear()%400!==0) {
        prevMonthMaxDate--;
      }
    }
  }


  for (var i = 1; i < 43; i++) {
    let row = Math.floor((i - 1)/7);
    let col = (i - 1) - row*7;
    if (col === 0) {
      cells[row] = [];
    }
    if (i <= offset) {
      cells[row][col] = {
        shown: false,
        date: prevMonthMaxDate-offset+i
      };
    } else if (i-offset <= thisMonthMaxDate) {
      cells[row][col] = {
        shown: true,
        date: i-offset
      };
    } else {
      cells[row][col] = {
        shown: false,
        date: i-offset-thisMonthMaxDate
      };
    }
  }
  return cells;
}

export default initCells
