import TodoItem from './TodoItem';

function TodosList({todos}) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo}/>
        ))}
      </ul>
    </>
  );
}

export default TodosList;
