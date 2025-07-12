import React from "react";

export default function TagsFilter({ allTags, selectedTags, onTagClick }) {
  return (
    <div className="tags-filter">
      <span>Filter by skills:</span>
      {allTags.map(tag => (
        <button
          key={tag}
          className={`tag-filter-btn${selectedTags.includes(tag) ? " selected" : ""}`}
          onClick={() => onTagClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}