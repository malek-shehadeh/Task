import React from "react";
import { TaskProvider } from "./Context/TaskProvider";
import TaskManager from "./Components/Taskmanager/TaskManager";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form/Form";
import AppChat from "./Components/app-chat/AppChat";
const App = () => (
  <TaskProvider>
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/task-manager" element={<TaskManager />} />
          <Route path="/form" element={<Form />} />
          <Route path="/appchat" element={<AppChat />} />
        </Routes>
      </div>
    </Router>
  </TaskProvider>
);

export default App;
