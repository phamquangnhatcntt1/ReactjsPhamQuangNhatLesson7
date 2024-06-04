import React, { useState, useEffect } from 'react';

export default function PqnTaskAddOrEdit({ pqnOnSubmit, taskToEdit }) {
  const initialTask = { 
      pqn_taskId: 0, 
      pqn_taskName: "",
      pqn_level: "" 
  };

  const [pqnTask, setPqnTask] = useState(initialTask);

  useEffect(() => {
    if (taskToEdit) {
      setPqnTask(taskToEdit);
    } else {
      setPqnTask(initialTask);
    }
  }, [taskToEdit]);

  const pqnHandleChange = (pqnEvent) => {
    const { name, value } = pqnEvent.target;
    setPqnTask(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const pqnHandleSubmit = (pqnEvent) => {
    pqnEvent.preventDefault();
    pqnOnSubmit(pqnTask);
  };

  return (
    <div>
      <h2>{taskToEdit ? 'Edit Task' : 'Thêm mới task'}</h2>
      <form onSubmit={pqnHandleSubmit}>
        <div>
          <label>Task ID</label>
          <input 
            type='number'
            name='pqn_taskId' 
            value={pqnTask.pqn_taskId} 
            onChange={pqnHandleChange} 
            disabled={taskToEdit !== null}
          />
        </div>
        <div>
          <label>Task Name</label>
          <input 
            type='text'
            name='pqn_taskName' 
            value={pqnTask.pqn_taskName} 
            onChange={pqnHandleChange} 
          />
        </div>
        <div>
          <label>Task Level</label>
          <select 
            name='pqn_level' 
            value={pqnTask.pqn_level} 
            onChange={pqnHandleChange}
          >
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
          </select>
        </div>
        <button type='submit'>Ghi lại</button>
      </form>
    </div>
  );
}