import React from "react";

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
    </div>
  );
};

export default NewTask;
