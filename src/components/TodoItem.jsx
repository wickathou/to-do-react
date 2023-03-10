import PropTypes from 'prop-types';

function TodoItem({ todo, setCompleted, deleteItem }) {
  return (
    <li className="flex justify-between content-center my-1">
      <div className="flex">
        <input type="checkbox" checked={todo.completed} onClick={() => setCompleted(todo.id)} />
        <p className="ml-2">{todo.title}</p>
      </div>
      <button className="px-1 rounded-sm bg-orange-300 text-neutral-800" type="button" onClick={() => deleteItem(todo.id)}>X</button>
    </li>
  );
}

TodoItem.defaultProps = {
  todo: null,
};

TodoItem.propTypes = {
  todo: {
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  },
  setCompleted: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default TodoItem;
