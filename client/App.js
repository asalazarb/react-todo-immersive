import React, { Component } from 'react'
import TodoContainer from './todo/TodoContainer';


class App extends React.Component {
  render() {
    return (
      <div>
      <div><h1>ToDo</h1></div>
        <TodoContainer/>
      </div>
      
    )
  }
}

export default App