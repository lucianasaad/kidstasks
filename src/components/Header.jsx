import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="header">
      <div className="container header-inner">
        <h1><Link to="/">KidsTasks</Link></h1>
        <nav>
          <Link to="/">Tarefas</Link>
          <Link to="/nova">Nova</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </header>
  )
}
