import React from "react";
import Calendar from "./Calendar/Calendar";
import DayManager, { getDayOfWeek } from "./DayManager/DayManager";
import Timetable from "./Timetable/Timetable";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Calendar />

      <DayManager
        isDayShown={true}
        day={new Date().getDate()}
        month={new Date().getMonth()}
        date={new Date()}
      />

      <Timetable />
    </div>
  );
}

export default App;
