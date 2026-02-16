import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
const TASKS_ENDPOINT = `${API_URL}/api/tasks`;

const taskService = {
  getAllTasks: () => axios.get(TASKS_ENDPOINT),
  getTaskById: (id) => axios.get(`${TASKS_ENDPOINT}/${id}`),
  createTask: (task) => axios.post(TASKS_ENDPOINT, task),
  updateTask: (id, task) => axios.put(`${TASKS_ENDPOINT}/${id}`, task),
  deleteTask: (id) => axios.delete(`${TASKS_ENDPOINT}/${id}`),
};

export default taskService;
