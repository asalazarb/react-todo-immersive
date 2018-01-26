import React from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import { addTodo, addDone, deleteTodo } from './actions'



class TodoContainer extends React.Component {
    state = {
      newTodoVal: ''
    }

  /*componentDidMount() {
      fetch("http://localhost:3000/todos")
          .then(response => response.json())
          .then(data => this.setState({ todos: data }));
  }*/


    setToDone = (e) => {
      this.props.addDone(e.target.id)
    }

    handleSubmit = () => {
      this.props.addTodo(this.state.newTodoVal)
      this.setState({ newTodoVal: '' })
    }

    handleInput = (e) => {
      this.setState({ newTodoVal: e.target.value });
    }

    deleteTodo = (e) => {
      this.props.deleteTodo(e.target.id)
    }


    render() {
      return (
        <TodoList todos={this.props.todos} setToDone={this.setToDone} deleteTodo={this.deleteTodo} handleInput={this.handleInput} handleSubmit={this.handleSubmit} inputValue={this.state.newTodoVal} />
      )
    }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: value => dispatch(addTodo(value)),
    addDone: id => dispatch(addDone(id)),
    deleteTodo: id => dispatch(deleteTodo(id)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)