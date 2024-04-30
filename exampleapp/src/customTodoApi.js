
const todos = [];

//asynchronous fetch
const fetchTodosFromApi = () => {
  return new Promise((resolve) => {
  
    setTimeout(() => {
      resolve(todos);
    }, 1000); 
  });
};

// create a new todo item
const createTodo = (newTodoData) => {
  return new Promise((resolve, reject) => {
    if (!newTodoData.title || !newTodoData.description) {
      reject("Title and description are required.");
      return;
    }
    const id = Date.now();
    const newTodo = {
      id,
      title: newTodoData.title,
      description: newTodoData.description,
      completed: true,
    };

    todos.push(newTodo);

    resolve(newTodo);
  });
};

// update an existing todo item
const updateTodo = (id, updatedTodo) => {
  return new Promise((resolve, reject) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);

    if (todoIndex === -1) {
      reject("Todo not found.");
      return;
    }
    todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };

    resolve(todos[todoIndex]);
  });
};

// delete a todo item by ID
const deleteTodo = (id) => {
  return new Promise((resolve, reject) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);

    if (todoIndex === -1) {
      reject("Todo not found.");
      return;
    }
    todos.splice(todoIndex, 1);

    resolve("Todo deleted successfully.");
  });
};

export { todos, fetchTodosFromApi, createTodo, updateTodo, deleteTodo };
