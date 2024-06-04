import React from 'react';

export default function PqnListTask({ renderPqnListTasks, onPqnEdit,  }) {
    console.log(renderPqnListTasks);

    const pqnHandleEdit = (param) => {
        console.log("Edit:", param);
        onPqnEdit(param);
    };

    

    if (!renderPqnListTasks) {
        return <div>No tasks available</div>;
    }

    let pqnElementTask = renderPqnListTasks.map((task, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{task.pqn_taskId}</td>
                <td>{task.pqn_taskName}</td> 
                <td>{task.pqn_level}</td>
                <td>
                    <button className='btn btn-success' onClick={() => pqnHandleEdit(task)}>Edit</button>
                    <button className='btn btn-danger' onClick={() => (task.pqn_taskId)}>Remove</button>
                </td>
            </tr>
        );
    });

    return (
        <div>
            <h2>Danh sách các nhiệm vụ</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Task ID</th>
                        <th>Task Name</th>
                        <th>Task Level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pqnElementTask}
                </tbody>
            </table>
        </div>
    );
}
