import React, { useContext, useMemo } from 'react'
import { TasksContext } from '../contexts/TasksContext'

export default function Dashboard(){
  const { tasks } = useContext(TasksContext)

  const stats = useMemo(() => {
    const total = tasks.length
    const pending = tasks.filter(t => t.status === 'pendente').length
    const inProgress = tasks.filter(t => t.status === 'em andamento').length
    const done = tasks.filter(t => t.status === 'concluída' || t.completed).length
    const overdue = tasks.filter(t => t.dueDate && new Date(t.dueDate) < new Date() && !t.completed).length
    return { total, pending, inProgress, done, overdue }
  }, [tasks])

  return (
    <div>
      <h2>Dashboard</h2>
      <ul className="stats">
        <li>Total: {stats.total}</li>
        <li>Pendentes: {stats.pending}</li>
        <li>Em andamento: {stats.inProgress}</li>
        <li>Concluídas: {stats.done}</li>
        <li>Atrasadas: {stats.overdue}</li>
      </ul>
    </div>
  )
}
