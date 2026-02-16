import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import taskService from '../services/taskService';
import '../styles/TasksPage.css';

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await taskService.getAllTasks();
      setTasks(response.data);
    } catch (err) {
      setError('Failed to load tasks. Please try again later.');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (taskData) => {
    try {
      const response = await taskService.createTask({
        ...taskData,
        completed: false,
      });
      setTasks([...tasks, response.data]);
    } catch (err) {
      setError('Failed to create task. Please try again.');
      console.error('Error creating task:', err);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await taskService.deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      setError('Failed to delete task. Please try again.');
      console.error('Error deleting task:', err);
    }
  };

  const handleToggleTask = async (id, completed) => {
    try {
      const task = tasks.find((t) => t.id === id);
      const response = await taskService.updateTask(id, {
        ...task,
        completed,
      });
      setTasks(
        tasks.map((t) => (t.id === id ? response.data : t))
      );
    } catch (err) {
      setError('Failed to update task. Please try again.');
      console.error('Error updating task:', err);
    }
  };

  return (
    <div className="tasks-page">
      <div className="page-header">
        <h1>📝 Task Manager</h1>
        <p>Organize your tasks efficiently</p>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="page-content">
        <div className="form-section">
          <TaskForm onSubmit={handleAddTask} />
        </div>

        <div className="list-section">
          <h2>Your Tasks</h2>
          {loading ? (
            <div className="loading">Loading tasks...</div>
          ) : (
            <TaskList
              tasks={tasks}
              onDelete={handleDeleteTask}
              onToggle={handleToggleTask}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
