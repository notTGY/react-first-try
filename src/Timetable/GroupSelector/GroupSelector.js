import React from "react";
import GroupOption from "./GroupOption";

function GroupSelector({ groupData }) {
  return (
    <div>
      <label>
        Выбери свою группу:
        <select>
          {groupData.map((item, i) => {
            return <GroupOption opt={item.name} key={i} />;
          })}
        </select>
      </label>
    </div>
  );
}

export default GroupSelector;
