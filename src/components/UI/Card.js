import React from "react";

export default function Card(props) {
  return (
    <div
      className=" shadow-md icon border-red-200 hover:border-double border-4 rounded-lg p-2 mx-3 max-w-xs w-48 h-48 my-10"
      style={{
        backgroundColor: "var(--rosone)",
        color: "var(--violone)",
      }}
    >
      {props.children}
    </div>
  );
}
