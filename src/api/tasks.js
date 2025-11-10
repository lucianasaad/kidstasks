import axios from 'axios'
const API = axios.create({ baseURL: 'http://localhost:3001' })

export const getTasks = () => API.get('/tasks').then(res => res.data)
export const getTask = (id) => API.get(`/tasks/${id}`).then(res => res.data)
export const createTask = (task) => API.post('/tasks', task).then(res => res.data)
export const updateTask = (id, task) => API.put(`/tasks/${id}`, task).then(res => res.data)
export const deleteTask = (id) => API.delete(`/tasks/${id}`).then(res => res.data)
