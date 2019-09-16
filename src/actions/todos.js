
// CREATE_TASK
let id = 0;
function addTodo(text){
  return {
    type: 'ADD_TODO',
    data: {
      key: id++,
      text: text,
      completed: false,
    }
  }
}

// UPDATE_TASK
function updateTodo(key){
  return {
    type: 'CHANGE_TODO',
    data: {
      key: key,
    }
  }
}

// DELETE_TASK
function deleteTodo(key){
  return {
    type: 'DELETE_TODO',
    data: {
      key: key,
    }
  }
}

export default {
  addTodo,
  updateTodo,
  deleteTodo,  
}