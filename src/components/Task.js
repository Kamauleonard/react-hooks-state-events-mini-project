import React, { useState } from "react";

function Task({ text, category, onFilterClick }) {
  const [isDeleted, setDeleted] = useState(false);

  const handleDelete = () => {
    setDeleted(true);
    onFilterClick("All"); 
  };

  if (isDeleted) {
    return null;
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;