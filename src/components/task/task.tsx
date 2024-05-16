import React, { useState } from "react";
import { TaskData } from "../../hooks/types";
import { BigButton } from "../../hooks/big-button/big-button";

import "./task.scss";

interface TaskProps {
  taskData: TaskData;
  onDeleteTask:(taskId: string) => void;
  onUpdateTaskStatus: (taskId: string, status: string) => void;
}

const Task: React.FC<TaskProps> = ({ taskData, onDeleteTask, onUpdateTaskStatus }) => {
  const [status, setStatus] = useState(taskData.status);

  const handleStatusChange = () => {
    const newStatus = status === "pending" ? "done" : "pending";
    setStatus(newStatus);
    onUpdateTaskStatus(taskData.id, newStatus);
  };

  const handleDeleteTask = () =>{
    onDeleteTask(taskData.id);
  }

  return (
    <div className="task">
      <h3>Task Name: {taskData.taskName}</h3>
      <p>Description: {taskData.taskDescription}</p>
      <p>Status: {status}</p>
      <div className="task__button">
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
    </div>
  );
};

export default Task;
