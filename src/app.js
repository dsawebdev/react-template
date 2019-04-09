import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/style.scss'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <h1>Code of the South</h1>
        <h2>React Template</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)