// todo actions

const ADD_TODO = 'ADD_TODO'

export const addTodo = value => {
  return {
    type: ADD_TODO,
    value
  }
}