import React from "react";

export default function ListItem({
  taskId,
  taskText,
  selected,
  onSelect,
  onDelete
}) {

  function handleSelect() {
    onSelect(taskId);
  }

  function handleDelete() {
    onDelete(taskId)
  }

  return(
    <li className="task-list__li">
      <button onClick={handleDelete} className="task-list__delete-task" />
      <input type="checkbox" checked={selected} onChange={handleSelect} value={taskText} className="task-list__task-checkbox" style={{fontSize: "22px"}}/>
      <span className={selected ? "task_selected" : "task_not-selected"}>{taskText}</span>
    </li>
  );
}