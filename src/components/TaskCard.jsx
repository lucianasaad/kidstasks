import React from 'react'
import { Link } from 'react-router-dom'
import * as api from '../api/tasks'

export default function TaskCard({ task }){

  const handleDelete = async () => {
    if (confirm(`Confirma exclusão da tarefa: ${task.title}?`)) {
      await api.deleteTask(task.id)
      window.location.reload()
    }
  }

  return (
    <article className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Entrega:</strong> {task.dueDate}</p>
      <p><strong>Prioridade:</strong> {task.priority}</p>
      <p><strong>Responsável:</strong> {task.assignedTo}</p>
      <div className="card-actions">
        <Link to={`/tarefa/${task.id}`} className="btn btn-small">Ver</Link>
        <Link to={`/editar/${task.id}`} className="btn btn-small">Editar</Link>
        <button onClick={handleDelete} className="btn btn-danger btn-small">Excluir</button>
      </div>
    </article>
  )
}
