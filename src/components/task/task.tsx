import React from "react";
import { TaskData } from "../types";

interface TaskProps {
  taskData: TaskData;
}

const Task: React.FC<TaskProps> = ({ taskData }) => {
  return (
    <div className="task">
      <h3>Task Name: {taskData.taskName}</h3>
      <p>Description: {taskData.taskDescription}</p>
    </div>
  );
};

export default Task;