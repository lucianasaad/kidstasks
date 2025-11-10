import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props){
    super(props)
    this.state = { hasError: false, error: null, info: null }
  }

  static getDerivedStateFromError(error){
    return { hasError: true, error }
  }

  componentDidCatch(error, info){
    this.setState({ error, info })
    console.error('ErrorBoundary caught', error, info)
  }

  render(){
    if (this.state.hasError){
      return (
        <div style={{padding:24, fontFamily:'sans-serif'}}>
          <h2>Ocorreu um erro na aplicação</h2>
          <pre style={{whiteSpace:'pre-wrap', color:'#900'}}>
            {String(this.state.error && this.state.error.toString())}
          </pre>
          <details style={{whiteSpace:'pre-wrap'}}>
            {this.state.info && this.state.info.componentStack}
          </details>
          <p>Tente recarregar (F5). Se o erro persistir, copie-o e cole no chat para eu ajudar.</p>
        </div>
      )
    }
    return this.props.children
  }
}
