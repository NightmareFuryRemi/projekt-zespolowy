import React from "react";
import { TaskData } from "../types";
import { Link } from "react-router-dom";
import Task from "../task/task";

interface MainPageProps {
  tasks: TaskData[];
}

const MainPage: React.FC<MainPageProps> = ({ tasks }) =>  {
  return (
    <div className="main-page">
      <h1>Lista zadań</h1>
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task key={index} taskData={task} />
        ))}
      </div>
      <div className="bottom-Page">
        <Link to="/new-task">
          <button>New-task</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;