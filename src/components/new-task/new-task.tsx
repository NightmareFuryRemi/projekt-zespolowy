import React, { useState } from "react";
import { TaskData } from "../types";
import { Link, useNavigate } from "react-router-dom";

import "./new-task.scss";

interface NewTaskProps {
  addTask: (taskData: TaskData) => void;
}

const NewTask: React.FC<NewTaskProps> = ({ addTask }) => {
  const [taskData, setTaskData] = useState<TaskData>({
    taskName: "",
    taskDescription: "",
  });

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  const handleTaskDataChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof TaskData
  ) => {
    const { value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleAddTask = () => {
    if (!taskData.taskName || !taskData.taskDescription) {
      alert("Please fill out both fields.");
      return;
    }
    addTask(taskData);
    setTaskData({ taskName: "", taskDescription: "" });
    navigate("/");
  };

  return (
    <div className="new-task">
      <input
        type="text"
        className="new-task__title"
        name="taskName"
        placeholder="Task Name"
        value={taskData.taskName}
        onChange={(e) => handleTaskDataChange(e, "taskName")}
      />
      <input
        type="text"
        className="new-task__desc"
        name="taskDescription"
        placeholder="Task Description"
        value={taskData.taskDescription}
        onChange={(e) => handleTaskDataChange(e, "taskDescription")}
      />
      <div className="new-task__button-container">
        <button className="new-task__add" onClick={handleAddTask}>
          Add
        </button>
        <button className="new-task__cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NewTask;
