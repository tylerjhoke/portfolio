import React from "react";

export default function TagsFilter({ allTags, selectedTags, onTagClick }) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-4">
      <span className="text-gray-700 font-medium mr-2 whitespace-nowrap">
        Filter by skills:
      </span>
      {allTags.map(tag => {
        const isSelected = selectedTags.includes(tag);
        return (
          <button
            key={tag}
            type="button"
            onClick={() => onTagClick(tag)}
            className={`px-4 py-1 rounded-full border text-sm font-medium transition-colors duration-20
              ${
                isSelected
                  ? "bg-gray-800 text-white border-gray-800"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
