import React, { useState } from 'react';
import JSONForms from '@jsonforms/react';
import { JsonFormsDispatch } from '@jsonforms/react/lib/JsonForms';

function App() {
  const [tasks, setTasks] = useState([]);
  const [jsonSchema, setJsonSchema] = useState({/* Your JSON Schema */});
  const [uiSchema, setUISchema] = useState({/* Your UI Schema */});
  const [formData, setFormData] = useState({});

  const addTask = () => {
    setTasks([...tasks, formData]);
    setFormData({});
  };

  return (
    <div>
      <h1>To-Do Application</h1>
      <JSONForms
        schema={jsonSchema}
        uischema={uiSchema}
        data={formData}
        onChange={({ data }) => setFormData(data)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.title} - {task.description} - {task.dueDate} - {task.priority}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
