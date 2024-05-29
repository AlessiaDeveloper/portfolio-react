import React from "react";

export default function Botton(props) {
  return (
    <div>
      <button
        className={` font-bold py-2 p-4 m-3 rounded hover:outline hover:outline-offset-2`}
        style={{ backgroundColor: "var(--violetto)", color: "var(--rosetto)" }}
      >
        {props.children}
      </button>
    </div>
  );
}
