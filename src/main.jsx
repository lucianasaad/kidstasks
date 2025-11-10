import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/index.css'
import ErrorBoundary from './components/ErrorBoundary'

// Importar o provider que criamos
import TasksProvider from './contexts/TasksContext'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TasksProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
  </TasksProvider>
    </BrowserRouter>
  </React.StrictMode>
)
