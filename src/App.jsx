import React from 'react'
import AppRoutes from './routes/AppRoutes'
import Header from './components/Header'

export default function App(){
  return (
    <div className="app">
      <Header />
      <main className="container">
        <AppRoutes />
      </main>
    </div>
  )
}
