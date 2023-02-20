import TodoItem from './TodoItem';
import InputTodo from './InputTodo';

function TodosList() {
  return (
    <>
      <InputTodo/>
      <ul className="mb-4 text-base">
        <TodoItem/>
      </ul>
    </>
  );
}

export default TodosList;
