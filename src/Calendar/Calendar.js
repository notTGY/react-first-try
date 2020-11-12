import React from 'react'
import './Calendar.css'
import CalendarRow from './CalendarRow'


function Calendar() {
  let cells = [];
  for (var i = 1; i < 43; i++) {
    let row = Math.floor((i - 1)/7);
    let col = (i - 1) - row*7;
    if (col === 0) {
      cells[row] = [];
    }
    if (i <= 6) {
      cells[row][col] = {shown: false, date: 25+i};
    } else if (i-6 < 31) {
      cells[row][col] = {shown: true, date: i-6};
    } else {
      cells[row][col] = {shown: false, date: i-6-30};
    }
  }

  return(
    <table className="Calendar">
      <tbody>
        {cells.map((item, i) => {
          return <CalendarRow arr={item} num={i} key={i}/>
        })
        }
      </tbody>
    </table>
  );
}

export default Calendar
