import React from 'react';
import '../styles/TaskItem.css';

const TaskItem = ({ task, onEdit, onDelete, onToggle }) => {
  const handleCheckChange = () => {
    onToggle(task.id, !task.completed);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleCheckChange}
          className="task-checkbox"
        />
        <div className="task-details">
          <h3 className="task-title">{task.title}</h3>
          {task.description && <p className="task-description">{task.description}</p>}
          <small className="task-meta">
            Created: {new Date(task.createdAt).toLocaleDateString()}
          </small>
        </div>
      </div>
      <div className="task-actions">
        <button className="btn btn-sm btn-danger" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
