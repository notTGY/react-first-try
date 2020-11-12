import React from 'react'
import './Calendar.css'
import initCells from './InitCells'
import CalendarTable from './CalendarTable'



function Calendar() {

  const cells = initCells();

  return(
    <CalendarTable cells={cells} key={1}/>
  );
}

export default Calendar
