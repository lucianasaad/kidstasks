import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TaskList from '../pages/TaskList'
import TaskForm from '../pages/TaskForm'
import TaskDetails from '../pages/TaskDetails'
import Dashboard from '../pages/Dashboard'

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="/nova" element={<TaskForm />} />
      <Route path="/editar/:id" element={<TaskForm />} />
      <Route path="/tarefa/:id" element={<TaskDetails />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}
