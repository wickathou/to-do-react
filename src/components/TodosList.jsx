import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({ todos, setCompleted, deleteItem }) {
  return (
    <>
      <ul className="my-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setCompleted={setCompleted} deleteItem={deleteItem} />
        ))}
      </ul>
    </>
  );
}

TodosList.defaultProps = {
  todos: null,
};

TodosList.propTypes = {
  todos: {
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  },
  setCompleted: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default TodosList;
