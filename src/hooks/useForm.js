import { useState } from 'react'

export default function useForm(initial = {}) {
  const [form, setForm] = useState(initial)

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const reset = () => setForm(initial)

  return { form, setForm, onChange, reset }
}
