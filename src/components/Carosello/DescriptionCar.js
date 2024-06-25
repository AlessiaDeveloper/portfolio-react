import React from "react";
import TestoAnimato from "../UI/TestoAnimato";

export default function DescriptionCar(props) {
  const { descrizione } = props;
  return (
    <div
      className="md:w-3/6 xs:w-6/6 flex items-center justify-center md:rounded-br-md xs:rounded-b-md p-10"
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
