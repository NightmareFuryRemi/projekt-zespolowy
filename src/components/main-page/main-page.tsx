import React from "react";

import './main-page.scss';

const MainPage: React.FC<{}> = () => {
  return (
    <div className="main-page">
      <h1>Witaj na stronie głównej!</h1>
      <div className="bottom-Page">
        <button>Button_1</button>
      </div>
    </div>
  );
};

export default MainPage;
