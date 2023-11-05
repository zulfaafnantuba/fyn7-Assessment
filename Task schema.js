export const taskSchema = {
    type: 'object',
    properties: {
      title: { type: 'string' },
      description: { type: 'string' },
      dueDate: { type: 'string', format: 'date' },
      priority: { type: 'string', enum: ['Low', 'Medium', 'High'] },
    },
    required: ['title', 'priority'],
  };
  
  export const taskUISchema = {
    type: 'VerticalLayout',
    elements: [
      { type: 'Control', scope: '#/properties/title' },
      { type: 'Control', scope: '#/properties/description' },
      { type: 'Control', scope: '#/properties/dueDate', options: { format: 'date' } },
      {
        type: 'Control',
        scope: '#/properties/priority',
        options: {
          enum: ['Low', 'Medium', 'High'],
          renderAs: 'custom-priority-renderer', // Your custom priority renderer component
        },
      },
    ],
  };
  
  export const customRenderers = [
    {
      tester: (schema, uischema) => schema.type === 'string' && schema.enum,
      renderer: ({ schema, uischema, path, ...rest }) => {
        // Implement your custom priority renderer here
        return (
          <div>
            <label>{uischema.label}</label>
            <select
              value={rest.data || ''}
              onChange={(event) => rest.handleChange(path, event.target.value)}
            >
              {schema.enum.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );
      },
    },
  ];
  