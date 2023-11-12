import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filterTask, setFilterTask] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState(TASKS);

  function handleFilterChange(category) {
    setFilterTask(category);
    filterTasks(category);
  }

  function filterTasks(category) {
    if (category === "All") {
      setFilteredTasks(TASKS);
    } else {
      const filtered = TASKS.filter((task) => task.category === category);
      setFilteredTasks(filtered);
    }
  }
  function handleTaskFormSubmit(newTask) {
    const updatedTasks = [...TASKS, newTask];
    setFilteredTasks(updatedTasks);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filter={handleFilterChange} />
      <NewTaskForm onTaskFormSubmit={handleTaskFormSubmit} categories={CATEGORIES}/>
      <TaskList tasks={filteredTasks} onFilterClick={filterTasks}/>
    </div>
  );
}

export default App;
 