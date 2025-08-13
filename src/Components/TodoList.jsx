// Components/TodoList.js
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  return (
    <ul className="todo-item-container">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          text={todo.text}
          completed={todo.completed}
          setTodos={setTodos}
          todos={todos}
          index={index}
        />
      ))}
    </ul>
  );
}

export default TodoList;
