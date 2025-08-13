function TodoFilter({ setFilter }) {
  return (
    <div className="filter-btn-container d-flex justify-content-center align-item-center gap-2">
      <button className="filter-btn" onClick={() => setFilter("All")}>All</button>
      <button className="filter-btn" onClick={() => setFilter("Completed")}>Completed</button>
      <button className="filter-btn" onClick={() => setFilter("Pending")}>Pending</button>
    </div>
  );
}

export default TodoFilter;
