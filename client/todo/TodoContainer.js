import React from 'react'
import uuid from 'uuid/v1'
import TodoList from './TodoList'


class TodoContainer extends React.Component {
    state = {
      todos: [],
      newTodoVal: '',
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
      const newTodo = {
        id: uuid(),
        value: this.state.newTodoVal,
        done: false,
      };
      this.setState({ todos: [...this.state.todos, newTodo] });
      this.setState({ newTodoVal: '' });
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
        <TodoList todos={this.state.todos} setToDone={this.setToDone} deleteTodo={this.deleteTodo} handleInput={this.handleInput} handleSubmit={this.handleSubmit} inputValue={this.state.newTodoVal} />
      );
    }
}

export default TodoContainer;
