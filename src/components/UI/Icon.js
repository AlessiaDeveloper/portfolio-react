import React from "react";

export default function Icon(props) {
  return (
    <div>
      <button className="transform hover:scale-150 hover:border-dashed border-2  border-red-200 hover:text-indigo-700 transition duration-300">
        {props.children}
      </button>
    </div>
  );
}
