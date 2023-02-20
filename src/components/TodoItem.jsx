function TodoItem({todo, setCompleted, deleteItem}) {



  return (
    <li className="flex justify-between" key={todo.id}>
      <div className="flex">
        <input type="checkbox" checked={todo.completed} onClick={() => setCompleted(todo.id)} />
        <p className="ml-2">{todo.title}</p>
      </div>
      <button className="px-1 rounded-sm bg-indigo-500" type="button" onClick={() => deleteItem(todo.id)}>X</button>
    </li>
  );
}

export default TodoItem;
