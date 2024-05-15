import React from "react";

import "./new-task.scss";

const NewTask: React.FC = () => {
  return (
    <div className="new-task">
      <input
        type="text"
        className="new-task__title"
        placeholder="Name a task"
      ></input>

      <input
        type="text"
        className="new-task__desc"
        placeholder="Describe a task"
      />
      <div className="new-task__button-container">
        <button className="new-task__add">Add task</button>
        <button className="new-task__cancel">Cancel task</button>
      </div>
    </div>
  );
};

export default NewTask;
