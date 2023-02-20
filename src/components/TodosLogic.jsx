import {useState} from 'react';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodosLogic = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const deleteTask = (id) => {
    setTodos([...todos.filter(todos => todos.id !== id)])
  }


  const handleCheckClick = (id) => {
    setTodos((prevState) =>
    prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
  );
  }

  return (
    <>
      <InputTodo/>
      <TodosList todos={todos} setCompleted={handleCheckClick} deleteItem={deleteTask}/>
    </>
  );
};
export default TodosLogic;
