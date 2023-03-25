function ToDoItem({ todo, removeCallback, completeTodo }) {
  return (
    <div className={`${todo.isCompleted ? "todo completed" : "todo"}`}>
      <div className="todo__info">
        <p>{todo.title}</p>
        <p>{`${todo.id.slice(0, 6)}...`}</p>
      </div>
      <div className="button-row">
        {!todo.isCompleted && (
          <button className="done-btn" onClick={() => completeTodo(todo)}>
            {" "}
            Done{" "}
          </button>
        )}
        <button
          className="delete"
          onClick={() => {
            removeCallback(todo.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
