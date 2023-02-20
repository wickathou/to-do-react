function InputTodo() {
  return (
    <div className="flex justify-between">
      <input className="rounded-sm" type="text" />
      <button className="px-6 pt-2.5 pb-2 rounded-sm bg-indigo-500" type="button">Add</button>
    </div>
  );
}

export default InputTodo;
