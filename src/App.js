import logo from './logo.svg';
import './App.css';
import MainPage from './components/main-page/main-page';
import NewTask from './components/new-task/new-task';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskData) => {
    setTasks([...tasks, taskData]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<MainPage tasks={tasks} addTask={addTask} onDeleteTask={deleteTask}/>}
          />
          <Route
            path="/new-task"
            element={<NewTask addTask={addTask} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
