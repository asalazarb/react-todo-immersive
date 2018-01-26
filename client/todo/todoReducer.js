// todos reducer
import uuid from 'uuid/v1'

const DEFAULT_STATE = {
  todos: []
}

const todos = (state = DEFAULT_STATE, action) => {

  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: uuid(),
          value: action.value,
          done: false
        }],
      }
    case 'ADD_DONE':
      return{
        todos: state.todos.map((item) => {
          if (item.id === action.id) {
            item.done = true;
          }
          return item;
        }),
      }
    case 'DELETE_TODO':
      return{
        
        todos: state.todos.filter(item => item.id !== action.id)
     
      }
      
    default:
      return state
  }
}

export default todos