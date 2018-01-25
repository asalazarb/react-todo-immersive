import React from 'react'
import uuid from 'uuid/v1'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import { addTodo } from './actions'


class TodoContainer extends React.Component {
    state = {
      newTodoVal: ''
    }

    componentDidMount() {
      fetch("http://localhost:3000/todos")
          .then(response => response.json())
          .then(data => this.setState({ todos: data }));
  }


    setToDone = (e) => {
      const key = e.target.id;
      this.setState({
        todos: this.state.todos.map((item) => {
          if (item.id === key) {
            item.done = true;
          }
          return item;
        }),
      });
    }

    handleSubmit = () => {
      this.props.addTodo(this.state.newTodoVal)
      this.setState({ newTodoVal: '' })
    }

    handleInput = (e) => {
      this.setState({ newTodoVal: e.target.value });
    }

    deleteTodo = (e) => {
      const key = e.target.id;
      this.setState({
        todos: this.state.todos.filter(item => item.id !== key),
      });
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
    addTodo: value => dispatch(addTodo(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)