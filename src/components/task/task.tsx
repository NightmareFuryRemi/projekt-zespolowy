import React, { useState } from "react";
import { TaskData } from "../types";
import "./task.scss"

interface TaskProps {
  taskData: TaskData;
}

const Task: React.FC<TaskProps> = ({ taskData }) => {
  const [status, setStatus] = useState(taskData.status);
  const [showButton, setShowButton] = useState(true);

  const handleStatusChange = () => {
    if (status !== "done") {
      const newStatus = status === "pending" ? "done" : "pending";
      setStatus(newStatus);
      setShowButton(false);
    }
  };

  return (
    <div className="task">
      <h3>Task Name: {taskData.taskName}</h3>
      <p>Description: {taskData.taskDescription}</p>
      <p>Status: {status}</p>
      {showButton && (
        <button className="task__button" onClick={handleStatusChange}>
          Change Status
        </button>
      )}
    </div>
  );
};

export default Task;
