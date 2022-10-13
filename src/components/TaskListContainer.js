import React from "react";
import ListItem from "./ListItem";

export default function TaskListContainer({
  tasks,
  onSelect,
  onDelete
}) {
  function handleSelectTask(taskId) {
    onSelect(taskId);
  }

  return (
    <div>
      <ul className="task-list">
        {tasks.map(({content, id, selected}) => (
          <ListItem 
            taskId={id}
            key={id}
            taskText={content}
            selected={selected}
            onSelect={handleSelectTask}
            onDelete={onDelete}
          />))}
      </ul>
    </div>
  );
}