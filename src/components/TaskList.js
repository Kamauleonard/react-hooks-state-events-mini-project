import React from "react";
import Task from "./Task";

function TaskList({ tasks, onFilterClick }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onFilterClick={onFilterClick}
        />
      ))}
    </div>
  );
}

export default TaskList;
