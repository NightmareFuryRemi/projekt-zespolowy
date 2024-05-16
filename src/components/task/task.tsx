import React, { useState } from "react";
import { TaskData } from "../../hooks/types";
import { BigButton } from "../../hooks/big-button/big-button";

import "./task.scss";

interface TaskProps {
  taskData: TaskData;
  onDeleteTask:(taskId: string) => void;
}

const Task: React.FC<TaskProps> = ({ taskData, onDeleteTask }) => {
  const [status, setStatus] = useState(taskData.status);

  const handleStatusChange = () => {
    const newStatus = status === "pending" ? "done" : "pending";
    setStatus(newStatus);
  };

  const handleDeleteTask = () =>{
    console.log("Deleting task with ID:", taskData.id);
    onDeleteTask(taskData.id);
  }

  return (
    <div className="task">
      <h3>Task Name: {taskData.taskName}</h3>
      <p>Description: {taskData.taskDescription}</p>
      <p>Status: {status}</p>
      {status === "pending" ? (
        <BigButton
          color="primary"
          text="Mark as Done"
          onClick={handleStatusChange}
        />
      ) : (
        <BigButton
          color="secondary"
          text="Delete Task"
          onClick={handleDeleteTask}
        />
      )}
    </div>
  );
};

export default Task;
