import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TasksContext } from '../contexts/TasksContext'
import TaskCard from '../components/TaskCard'
import FilterBar from '../components/FilterBar'

export default function TaskList(){
  const { tasks, loading } = useContext(TasksContext)

  if (loading) return <p>Carregando...</p>

  return (
    <div>
      <div className="list-header">
        <h2>Tarefas</h2>
        <div>
          <Link to="/nova" className="btn">+ Nova Tarefa</Link>
          <Link to="/dashboard" className="btn btn-light">Dashboard</Link>
        </div>
      </div>

      <FilterBar />

      <div className="cards">
        {tasks.length === 0 && <p>Nenhuma tarefa encontrada.</p>}
        {tasks.map(t => <TaskCard key={t.id} task={t} />)}
      </div>
    </div>
  )
}
