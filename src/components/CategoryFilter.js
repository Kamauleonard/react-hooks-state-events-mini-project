import React, {useState} from "react";

function CategoryFilter({ categories, filter }) {
  const [whichColor, setWhichColor] = useState("All");

  const handleColor = (category) => {
    setWhichColor(category);
    filter(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button
          key={index}
          className={whichColor === category ? "selected" : ""}
          onClick={() => handleColor(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;