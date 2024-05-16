import React from "react";
import { TaskData } from "../../hooks/types";
import Task from "../task/task";
import { BigButton } from "../../hooks/big-button/big-button";
import { useNavigate } from "react-router-dom";

import "./main-page.scss";
interface MainPageProps {
  tasks: TaskData[];
  onDeleteTask: (taskId: string) => void;
  onUpdateTaskStatus: (taskId: string, status: string) => void;
}

const MainPage: React.FC<MainPageProps> = ({ tasks, onDeleteTask, onUpdateTaskStatus  }) => {
  const navigate = useNavigate();

  const handleDeleteTask = (taskId: string) => {
    onDeleteTask(taskId);
  };

  const handleUpdateTaskStatus = (taskId: string, status: string) => {
    onUpdateTaskStatus(taskId, status);
  };

  return (
    <div className="main-page">
      <h1>Tasks</h1>
      <div className="main-page__task-list">
        {tasks.map((task) => (
          <Task key={task.id} taskData={task} onDeleteTask={handleDeleteTask} onUpdateTaskStatus={handleUpdateTaskStatus}/>
        ))}
      </div>
      <div className="main-page__bottom-Page">
        <BigButton
          color="secondary"
          text={"New Task"}
          onClick={() => navigate("/new-task")}
        />
      </div>
    </div>
  );
};

export default MainPage;
