import logo from './logo.svg';
import './App.css';
import MainPage from './components/main-page/main-page';
import NewTask from './components/new-task/new-task';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/new-task" element={<NewTask />} />
      </Routes>
    </Router>
  );
}

export default App;
