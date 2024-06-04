import React, { useState } from 'react';
import './App.css';
import PqnListTask from './components/PqnListTask';
import PqnTaskAddOrEdit from './components/PqnTaskAddorEdit';

function App() {
  const initialTasks = [
    { pqn_taskId: 22101115, pqn_taskName: "Phạm Quang Nhất", pqn_level: "Small" },
    { pqn_taskId: 1, pqn_taskName: "Học lập trình frontend", pqn_level: "Small" },
    { pqn_taskId: 2, pqn_taskName: "Học lập trình reactjs", pqn_level: "Medium" },
    { pqn_taskId: 3, pqn_taskName: "Lập trình với Frontend - Reactjs", pqn_level: "High" },
    { pqn_taskId: 4, pqn_taskName: "Lập trình Fullstack (PHP, Java, NetCore)", pqn_level: "Small" },
  ];

  const [pqnListTasks, setPqnListTasks] = useState(initialTasks);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const pqnHandleSubmit = (newTask) => {
    if (taskToEdit) {
      
      setPqnListTasks(prevTasks =>
        prevTasks.map(task => (task.pqn_taskId === newTask.pqn_taskId ? newTask : task))
      );
    } else {
      
      setPqnListTasks(prevTasks => [
        ...prevTasks,
        newTask
      ]);
    }
    setTaskToEdit(null);
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
  };

  const handleRemoveTask = (taskId) => {
    setPqnListTasks(prevTasks =>
      prevTasks.filter(task => task.pqn_taskId !== taskId)
    );
  };

  return (
    <div className="container border">
      <h1>Phạm Quang Nhất K22CNTT1</h1>
      <hr />
      <div>
        {/* Danh sách List task */}
        <PqnListTask renderpqnListTasks={pqnListTasks} onPqnEdit={handleEditTask} />
      </div>
      <div>
        <PqnTaskAddOrEdit pqnOnSubmit={pqnHandleSubmit} taskToEdit={taskToEdit} />
      </div>
    </div>
  );
}

export default App;