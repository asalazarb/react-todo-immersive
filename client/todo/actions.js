// todo actions

const ADD_TODO = 'ADD_TODO'
const SET_TO_DONE = 'ADD_DONE'
const DELETE_TODO = 'DELETE_TODO'

export const addTodo = value => {
  return {
    type: ADD_TODO,
    value
  }
}

export const addDone = id => {
  return {
    type: SET_TO_DONE,
    id
  }
}

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}