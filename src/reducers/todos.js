
function todos(state = [], action){
  switch (action.type) {
    case 'ADD_TODO':
    return [
      ...state,
      {
        key: action.data.key,
        text: action.data.text,
        completed: action.data.completed,
      }
    ]

    case 'CHANGE_TODO':
      state.map(todo => {
        if(todo.key === action.data.key){
          todo.completed = !todo.completed;
        }
      });
      return [
        ...state
      ]

    case 'DELETE_TODO':
      let n = state.filter(todo => todo.key !== action.data.key)
      return [
        ...n
      ]

    default:
      return state
  }
}

export default todos
