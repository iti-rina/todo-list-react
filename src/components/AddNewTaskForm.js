import React from "react";

export default function AddNewTaskForm({
  inputProps,
  handleSubmit
}) {
  return (
    <div className="inputTaskForm">
      <form
        onSubmit={handleSubmit}
        className="add-new-task-field"
        >
        <button type="submit" className="add-new-task-field__add-btn">
        </button>
        <input
          {...inputProps}
          type="text"
          placeholder="Enter a new task"
          className="add-new-task-field__input-line"
        />
      </form>
    </div>
  );
}