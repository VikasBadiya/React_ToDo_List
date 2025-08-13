import { useState } from "react";

function TodoInput({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="todo-input-container d-flex flex-column justify-content-center align-item-center p-4 gap-2"
    >
      <div className="d-flex gap-1 justify-content-center align-item-center">
        <span className="book-icon d-flex flex-column justify-content-center align-item-center p-2 input-group-text">
          <i className="fa-solid fa-book book-color"></i>
        </span>
        <input
          style={{ width: "100%" }}
          type="text"
          className="form-control"
          placeholder="New Todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <input type="submit" className="submit-btn" value="Add Todo" />
    </form>
  );
}

export default TodoInput;
