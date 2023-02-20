function TodoItem({todo}) {
  return (
    <li className="flex justify-between" key={todo.id}>
      <div className="flex">
        <input type="checkbox"/>
        <p className="ml-2">{todo.title}</p>
      </div>
      <span>X</span>
    </li>
  );
}

export default TodoItem;
