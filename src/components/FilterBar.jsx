import React, { useState, useContext, useMemo } from 'react'
import { TasksContext } from '../contexts/TasksContext'

export default function FilterBar(){
  // garantir um valor padrão para tasks
  const { tasks = [] } = useContext(TasksContext) || {}
  const [q, setQ] = useState('')

  const lowerQ = useMemo(() => (q || '').toLowerCase(), [q])

  const filtered = useMemo(() => {
    if (!Array.isArray(tasks) || tasks.length === 0) return []
    return tasks.filter(t => {
      if (!t) return false
      const title = t.title != null ? String(t.title) : ''
      const desc = t.description != null ? String(t.description) : ''
      return title.toLowerCase().includes(lowerQ) || desc.toLowerCase().includes(lowerQ)
    })
  }, [tasks, lowerQ])

  return (
    <div className="filter-bar">
      <input
        placeholder="Buscar por título ou descrição..."
        value={q}
        onChange={e => setQ(e.target.value)}
      />
      <span className="filter-count">Resultados: {filtered.length}</span>
    </div>
  )
}
