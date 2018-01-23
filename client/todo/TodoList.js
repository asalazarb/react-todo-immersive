import React, { Component } from 'react'
import TodoItem from './TodoItem'



class TodoList extends React.Component {


  render() {
    return (

      <div>
          <input onChange={this.props.handleInput} value={this.props.inputValue}/>
          <button onClick={this.props.handleSubmit}>Add Task</button>
          <ul>
            {this.props.todos.map( todo => {
              if(!todo.done){
                return <TodoItem button={false} key={todo.id} id={todo.id} value={todo.value} onClickHandler={this.props.setToDone}/>
              }
            }

            )}
          </ul>
          <h1>Done</h1>
          <ul>
            {this.props.todos.map( todo => {
              if(todo.done){
                return <TodoItem button={true} key={todo.id} id={todo.id} value={todo.value} onClickHandler={this.props.deleteTodo}/>
              }
            }

            )}
          </ul>
          
          
      </div>
    )
  }
}

export default TodoList