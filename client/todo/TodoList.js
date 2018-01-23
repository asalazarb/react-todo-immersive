import React from 'react'
import {string, func, array} from 'prop-types'
import TodoItem from './TodoItem';



class TodoList extends React.Component {

  static propTypes = {
    handleInput: func,
    handleSubmit: func,
    setToDone: func,
    deleteTodo: func,
    inputValue: string,
    todos: array,
  }

  static defaultProps = {
    handleInput: () => {},
    handleSubmit: () => {},
    setToDone: () => {},
    deleteTodo: () => {},
    inputValue: "",
    todos: []
  }


  render() {
    return (

      <div>
        <input onChange={this.props.handleInput} value={this.props.inputValue} />
        <button onClick={this.props.handleSubmit}>Add Task</button>
        <ul>
          {this.props.todos.map((todo) => {
              if (!todo.done) {
                return <TodoItem button={false} key={todo.id} id={todo.id} value={todo.value} onClickHandler={this.props.setToDone} />;
              }
            })}
        </ul>
        <h1>Done</h1>
        <ul>
          {this.props.todos.map((todo) => {
              if (todo.done) {
                return <TodoItem button key={todo.id} id={todo.id} value={todo.value} onClickHandler={this.props.deleteTodo} />;
              }
            })}
        </ul>


      </div>
    );
  }
}

export default TodoList;
