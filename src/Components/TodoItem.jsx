import { useState } from "react";

function TodoItem({ text, completed, onComplete, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleSave = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <li className="w-100">
      <div className="todo-item d-flex flex-row align-items-center justify-content-evenly p-2">
        
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            style={{ flex: "1", marginRight: "10px" }}
          />
        ) : (
          <p
            className="todo-item-text"
            style={{
              textDecoration: completed ? "line-through" : "none",
              color: completed ? "gray" : "black",
            }}
          >
            {text}
          </p>
        )}

        <div className="d-flex gap-2 align-items-end">
          {!isEditing ? (
            <>
              <button className="todo-item-btn btn-green" onClick={onComplete}>
                {completed ? "Undo" : "Completed"}
              </button>
              <button className="todo-item-btn btn-red" onClick={onDelete}>
                Delete
              </button>
              <button
                className="todo-item-btn btn-yellow"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            </>
          ) : (
            <button
              className="todo-item-btn btn-blue"
              onClick={handleSave}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
