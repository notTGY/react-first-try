import React, { useState } from "react";
import GroupSelector from "./GroupSelector/GroupSelector";
import Groups from "../data/Groups";
import ActualTimetable from "./ActualTimetable/ActualTimetable";
import "./Timetable.css";
import TimetableData from "../data/TimetableData";
import ParaData from "../data/ParaData";
import { getDayOfWeek } from "../DayManager/DayManager";

let isDefault = 1;

const ttData = (TimetableData())();

let updateDate;

const dayOfWeek = getDayOfWeek;

const paraData = ParaData();

const groups = Groups();

function findGroupInArr(key, arr) {
  let num = -1;
  arr.forEach((item, i) => {
    if (key == item.group) {
      num = i;
    }
  });
  return num;
}


function parseTimetableData(group, dow) {
  let retArr = [];
  for(let i = 0; i < paraData.length; i++) {
    retArr[i] = '';
  }
  let pointer = findGroupInArr(group, ttData);
  if (pointer === -1) {
    return retArr;
  }
  const grArr = ttData[pointer].arr;
  for (var i = 0; i < grArr[dow].length; i++) {
    retArr[i] = grArr[dow][i].value;
  }
  return retArr;
}






function Timetable() {
  const [group, setGroup] = useState('Б05-006');
  const [timetableData, setTimetableData] = useState(parseTimetableData(group, dayOfWeek()));

  function updateTimetableGroup(e) {
    setTimetableData(parseTimetableData(e.target.value, dayOfWeek()));
    isDefault = 0;
    setGroup(e.target.value);
  }

  function updateTimetableDay(dow) {
    setTimetableData(parseTimetableData(group, dow));
  }

  updateDate = updateTimetableDay;

  return (
    <div className="TimetableWrapper">
      <GroupSelector isDefault={isDefault} def={'Б05-006'} groupData={groups} reselect={updateTimetableGroup} />
      <ActualTimetable
        bigData={timetableData}
        paraData={paraData}
        somethingElse={undefined}
        key={1}
      />
    </div>
  );
}
export {updateDate};
export default Timetable;
