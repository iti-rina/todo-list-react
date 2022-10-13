import React, { useEffect, useState } from "react";
import AddNewTaskForm from "./AddNewTaskForm";
import TaskListContainer from "./TaskListContainer";
import { v4 } from "uuid";
import { useInput } from "../hooks";

const loadJSON = (key = "tasks") => JSON.parse(localStorage.getItem(key))
const saveJSON = (data, key = "tasks") => {
  console.log("hi");
  localStorage.setItem(key, JSON.stringify(data))
};

export default function ProjectPage(props) {
  const [tasks, setTasks] = useState(loadJSON("tasks") || []);
  const [newTaskProps, resetNewTask] = useInput("");

  function handleCreateNewTask(event) {
    event.preventDefault();
    const newTask = {
      content: newTaskProps.value,
      id: v4(),
      selected: false
    };
    setTasks([...tasks, newTask]);
    resetNewTask("");
  }

  function handleSelectTask(taskId) {
    const newTasksArray = tasks.map((task) => {
      if (task.id === taskId) task.selected = !task.selected;
      return task;
    });
    console.log(newTasksArray);
    setTasks(newTasksArray);
  }

  function handleDeleteTask(taskId) {
    const newTasksArray = tasks.filter(task => task.id !== taskId);
    setTasks(newTasksArray);
  }


  useEffect(() => {
    saveJSON(tasks)
  }, [tasks]);

  return (
    <main>
      <AddNewTaskForm inputProps={newTaskProps} handleSubmit={handleCreateNewTask} />
      <TaskListContainer 
        tasks={tasks}
        onSelect={handleSelectTask}
        onDelete={handleDeleteTask}
      />
    </main>
  );
}
