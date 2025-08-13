import { useState } from "react";
import "./App.css";
import TodoItem from "./Components/TodoItem";
import TodoFilter from "./Components/TodoFilter";
import TodoInput from "./Components/TodoInput";

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn HTML5", completed: false },
    { text: "Learn JavaScript", completed: true },
    { text: "Learn React", completed: false }
  ]);

  const [filter, setFilter] = useState("All");

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "Completed") return todo.completed;
    if (filter === "Pending") return !todo.completed;
    return true; // All
  });
const handleEdit = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  return (
    <div className="main-body">
      <div className="todo-container-card">
        <h2>Todo Input</h2>
        <TodoInput onAdd={addTodo} />

        <h2>Todo List</h2>
        <TodoFilter setFilter={setFilter} />

        <ul className="todo-item-container">
          {filteredTodos.map((todo, index) => (
            <TodoItem
              key={index}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => toggleComplete(index)}
              onDelete={() => deleteTodo(index)}
               onEdit={(newText) => handleEdit(index, newText)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
