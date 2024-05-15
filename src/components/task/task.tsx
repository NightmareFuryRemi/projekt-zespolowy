import React from 'react';

interface TaskProps {
  taskData: {
    taskName: string;
    taskDescription: string;
  };
}

const Task: React.FC<TaskProps> = ({ taskData }) => {
  return (
    <div className="task">
      <h3>Task Name: {taskData.taskName}</h3>
      <p>Description: {taskData.taskDescription}</p>
    </div>
  );
}

export default Task;