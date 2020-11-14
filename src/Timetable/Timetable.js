import React from "react";
import GroupSelector from "./GroupSelector/GroupSelector";
import Groups from "../data/Groups";
import ActualTimetable from "./ActualTimetable/ActualTimetable";
import "./Timetable.css";
import TimetableData from "../data/TimetableData";
import ParaData from "../data/ParaData";

const timetableData = TimetableData();
const paraData = ParaData();


const groups = Groups();

function Timetable() {
  return (
    <div className="TimetableWrapper">
      <GroupSelector groupData={groups} />
      <ActualTimetable
        bigData={timetableData}
        paraData={paraData}
        somethingElse={undefined}
        key={1}
      />
    </div>
  );
}

export default Timetable;
