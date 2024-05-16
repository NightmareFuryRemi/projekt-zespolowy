import React from "react";
import { TaskData } from "../../hooks/types";
import Task from "../task/task";
import { BigButton } from "../../hooks/big-button/big-button";
import { useNavigate } from "react-router-dom";

import "./main-page.scss";
interface MainPageProps {
  tasks: TaskData[];
}

const MainPage: React.FC<MainPageProps> = ({ tasks }) => {
  const navigate = useNavigate();

  return (
    <div className="main-page">
      <h1>Zadania</h1>
      <div className="main-page__task-list">
        {tasks.map((task, index) => (
          <Task key={index} taskData={task} />
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
