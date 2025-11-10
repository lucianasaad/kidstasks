import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import * as api from '../api/tasks'

export default function TaskDetails(){
  const { id } = useParams()
  const [task, setTask] = useState(null)
  useEffect(() => {
    api.getTask(id).then(setTask).catch(console.error)
  }, [id])

  if (!task) return <p>Carregando...</p>
  return (
    <div>
      <h2>{task.title}</h2>
      <p><strong>Descrição:</strong> {task.description}</p>
      <p><strong>Responsável:</strong> {task.assignedTo}</p>
      <p><strong>Data de Entrega:</strong> {task.dueDate}</p>
      <p><strong>Prioridade:</strong> {task.priority}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Notas:</strong> {task.notes}</p>
      <Link to={`/editar/${task.id}`} className="btn">Editar</Link>
    </div>
  )
}
