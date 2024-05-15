import React from "react";
import { Link } from "react-router-dom";
import './main-page.scss';

const MainPage: React.FC<{}> = () => {
  return (
    <div className="main-page">
      <h1>Zadania</h1>
      <div className="bottom-Page">
       <Link to="/new-task">
        <button>New-task</button>
       </Link>
      </div>
    </div>
  );
};

export default MainPage;
