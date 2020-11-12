import React from 'react'
import './Calendar.css'

function clickHandler(e) {
  ;
}

const styles = {
  transparent:{
    opacity: '0.3'
  },
  good:{
    opacity: '1'
  }
}


function CalendarCell( {date, isShown} ) {
  return(
    <td className="CalendarCell"
      onClick={clickHandler}
      style={isShown?styles.good:styles.transparent}>

      {date}

    </td>
  )
}

export default CalendarCell
