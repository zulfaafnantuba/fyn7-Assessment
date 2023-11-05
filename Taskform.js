// TaskForm.js
import React from 'react';
import { JsonForms, JsonFormsDispatch } from '@jsonforms/react';
import { taskSchema, taskUISchema } from './taskSchema';

function TaskForm({ addTask }) {
  const handleSubmit = (data) => {
    // Assign a unique ID to the task
    const newTask = { ...data, id: new Date().getTime(), completed: false };
    addTask(newTask);
  };

  return (
    <div>
      <h2>Add a New Task</h2>
      <JsonForms
        schema={taskSchema}
        uischema={taskUISchema}
        renderers={customRenderers}
        data={{}}
        onSubmit={({ data }) => handleSubmit(data)}
      />
    </div>
  );
}

export default TaskForm;
