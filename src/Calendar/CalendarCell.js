import React from 'react'
import './Calendar.css'

function clickHandler(e) {
  ;
}


function CalendarCell( {date, isShown} ) {
  return(
    <td className="CalendarCell" onClick={clickHandler}>
      {date}
    </td>
  )
}

export default CalendarCell
