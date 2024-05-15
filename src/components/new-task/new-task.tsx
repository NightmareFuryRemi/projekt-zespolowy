import React, { useState } from "react";
import Task from "../task/task";


const NewTask = () => {
  const [taskData, setTaskData] = useState({
    taskName: "",
    taskDescription: "",
  });

  const handleTaskDataChange = (name: string, value: string) => {
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="new-task">
      <h2>Create New Task</h2>
      <input
        type="text"
        name="taskName"
        placeholder="Task Name"
        value={taskData.taskName}
        onChange={(e) => handleTaskDataChange("taskName", e.target.value)}
      />
      <input
        type="text"
        name="taskDescription"
        placeholder="Task Description"
        value={taskData.taskDescription}
        onChange={(e) =>
          handleTaskDataChange("taskDescription", e.target.value)
        }
      />
      <Task taskData={taskData} />
    </div>
  );
};

export default NewTask;
