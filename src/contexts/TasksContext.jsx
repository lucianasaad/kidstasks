import React, { createContext, useState, useEffect } from 'react'
import * as api from '../api/tasks'

export const TasksContext = createContext()

export default function TasksProvider({ children }){
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    try {
      const data = await api.getTasks()
      setTasks(data)
    } catch(e) {
      console.error('Erro ao carregar tarefas', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const refresh = () => load()

  return (
    <TasksContext.Provider value={{ tasks, setTasks, loading, refresh }}>
      {children}
    </TasksContext.Provider>
  )
}
