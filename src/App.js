import React from "react";
import Calendar from "./Calendar/Calendar";
import DayManager from "./DayManager/DayManager";
import Timetable from "./Timetable/Timetable";

function App() {
  return (
    <div className="App">
      <h1>Cal endar</h1>

      <Calendar />

      <DayManager
        isDayShown={true}
        day={new Date().getDate()}
        month={new Date().getMonth()}
      />

      <Timetable />
    </div>
  );
}

export default App;
