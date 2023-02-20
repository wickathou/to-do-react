import TodoItem from './TodoItem';

function TodosList({todos, setCompleted, deleteItem}) {
  return (
    <>
      <ul className='my-4'>
        {todos.map((todo) => (
          <TodoItem todo={todo} setCompleted={setCompleted} deleteItem={deleteItem}/>
        ))}
      </ul>
    </>
  );
}

export default TodosList;
