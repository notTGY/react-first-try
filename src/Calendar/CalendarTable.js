import React from 'react'
import './Calendar.css'
import CalendarRow from './CalendarRow'


function CalendarTable({cells}) {

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

export default CalendarTable
