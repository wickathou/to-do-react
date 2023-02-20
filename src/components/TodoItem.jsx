function TodoItem({todo, setCompleted, deleteItem}) {



  return (
    <li className="flex justify-between content-center my-1" key={todo.id}>
      <div className="flex">
        <input type="checkbox" checked={todo.completed} onClick={() => setCompleted(todo.id)} />
        <p className="ml-2">{todo.title}</p>
      </div>
      <button className="px-1 rounded-sm bg-orange-300 text-neutral-800" type="button" onClick={() => deleteItem(todo.id)}>X</button>
    </li>
  );
}

export default TodoItem;
