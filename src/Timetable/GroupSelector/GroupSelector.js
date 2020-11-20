import React from "react";
import GroupOption from "./GroupOption";

function GroupSelector({ groupData , reselect, def, isDefault }) {
  return (
    <div>
      <label>
        Выбери свою группу:
        <select onChange={reselect} defaultValue={def}>
          {groupData.map((item, i) => {
            return <GroupOption opt={item.name} key={i} />;
          })}
        </select>
      </label>
    </div>
  );
}

export default GroupSelector;
