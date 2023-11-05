// TaskList.js
import React from 'react';

function TaskList({ tasks, completeTask, deleteTask }) {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>
            <span>{task.description}</span>
            <span>{task.dueDate}</span>
            <span className={task.completed ? 'completed' : ''}>{task.priority}</span>
            <button onClick={() => completeTask(task.id)}>Complete</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
