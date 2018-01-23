import React, { Component } from 'react'
import TodoList from './TodoList'
import uuid from 'uuid/v1'


class TodoContainer extends React.Component {

    state = {
            todos: [],
            newTodoVal: ''
    }

    handleInput = (e) => {
        this.setState({newTodoVal: e.target.value})
    }

    handleSubmit = (e) => {

        const newTodo = {
            id:  uuid(),
            value: this.state.newTodoVal,
            done: false
        }
        this.setState({todos: [... this.state.todos, newTodo]})
        this.setState({newTodoVal: ""}) 
    }

    setToDone = (e) => {
        const key = e.target.id
        this.setState({
            todos: this.state.todos.map(function(item){
                if(item.id === key){
                    item.done = true
                }
                return item
            }) 
        })
    }

    deleteTodo = (e) => {
        const key = e.target.id
        this.setState({
            todos: this.state.todos.filter( function(item){
                return item.id !== key 
                }  
            ) 
        })
        console.log(this.state.todos)
    }

    
    render() {
        return (
           <TodoList todos={this.state.todos} setToDone={this.setToDone} deleteTodo={this.deleteTodo} handleInput={this.handleInput} handleSubmit={this.handleSubmit} inputValue={this.state.newTodoVal}/>
        )
    }

    
}
    
    export default TodoContainer
