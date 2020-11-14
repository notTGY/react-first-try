import React from 'react'
import './Calendar.css'
import {focusDate} from '../DayManager/DayManager'


function clickHandler(d, m) {
  focusDate(d, m);
}

const styles = {
  transparent:{
    opacity: '0.3'
  },
  good:{
    opacity: '1'
  }
}


function CalendarCell( {date, isShown, month} ) {
  return(
    <td className="CalendarCell"
      onClick={clickHandler.bind(null, date, month)}
      style={isShown?styles.good:styles.transparent}>

      {date}

    </td>
  )
}

export default CalendarCell
