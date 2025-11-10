import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useForm from '../hooks/useForm'
import * as api from '../api/tasks'
import { TasksContext } from '../contexts/TasksContext'

export default function TaskForm(){
  const { id } = useParams()
  const editMode = Boolean(id)
  const { form, setForm, onChange } = useForm({
    title: '', description: '', dueDate: '', priority: 'Média', assignedTo: '', status: 'pendente', completed: false, notes: ''
  })
  const navigate = useNavigate()
  const { refresh } = useContext(TasksContext)

  useEffect(() => {
    if (editMode) {
      api.getTask(id).then(data => setForm(data)).catch(console.error)
    }
  }, [id])

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editMode) await api.updateTask(id, form)
      else await api.createTask(form)
      refresh()
      navigate('/')
    } catch(e) {
      alert('Erro ao salvar tarefa')
      console.error(e)
    }
  }

  return (
    <div>
      <h2>{editMode ? 'Editar Tarefa' : 'Nova Tarefa'}</h2>
      <form onSubmit={onSubmit} className="form">
        <label>Título
          <input name="title" value={form.title} onChange={onChange} required />
        </label>

        <label>Descrição
          <textarea name="description" value={form.description} onChange={onChange} />
        </label>

        <label>Data de Entrega
          <input type="date" name="dueDate" value={form.dueDate || ''} onChange={onChange} />
        </label>

        <label>Prioridade
          <select name="priority" value={form.priority} onChange={onChange}>
            <option>Baixa</option>
            <option>Média</option>
            <option>Alta</option>
          </select>
        </label>

        <label>Responsável
          <input name="assignedTo" value={form.assignedTo} onChange={onChange} />
        </label>

        <label>Concluída
          <input type="checkbox" name="completed" checked={form.completed} onChange={onChange} />
        </label>

        <label>Notas
          <input name="notes" value={form.notes} onChange={onChange} />
        </label>

        <div className="form-actions">
          <button type="submit" className="btn">{editMode ? 'Salvar' : 'Criar'}</button>
        </div>
      </form>
    </div>
  )
}
