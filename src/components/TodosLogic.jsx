import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodosLogic = () => {
  function retrieveTodos() {
    const todosJSON = localStorage.getItem('todos');
    const savedTodos = JSON.parse(todosJSON);
    return savedTodos || [];
  }

  const [todos, setTodos] = useState(retrieveTodos());

  useEffect(() => {
    const todosJSON = JSON.stringify(todos);
    localStorage.setItem('todos', todosJSON);
  }, [todos]);

  const deleteTask = (id) => {
    setTodos([...todos.filter((todos) => todos.id !== id)]);
  };

  const completeTask = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const addTask = (title) => {
    const newTask = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTask]);
  };

  return (
    <>
      <InputTodo addTask={addTask} />
      <TodosList todos={todos} setCompleted={completeTask} deleteItem={deleteTask} />
    </>
  );
};
export default TodosLogic;
