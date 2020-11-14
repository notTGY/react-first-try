import React from "react";
import GroupSelector from "./GroupSelector/GroupSelector";
import Groups from "../data/Groups";
import ActualTimetable from "./ActualTimetable/ActualTimetable";
import "./Timetable.css";

const styles = {};

const groups = Groups();

function Timetable() {
  return (
    <div className="TimetableWrapper">
      <GroupSelector groupData={groups} />
      <ActualTimetable />
    </div>
  );
}

export default Timetable;
