import React from "react";
import TestoAnimato from "./UI/TestoAnimato";

export default function DescriptionCar(props) {
  const { descrizione } = props;
  return (
    <div
      className="w-2/6 flex items-center justify-center rounded-br-md p-8 "
      style={{
        color: "var(--violone)",
        backgroundColor: "var(--rosone)",
        height: "!00%",
      }}
    >
      <TestoAnimato>{descrizione}</TestoAnimato>
    </div>
  );
}
