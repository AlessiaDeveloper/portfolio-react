import React from "react";

import TestoAnimato from "../UI/TestoAnimato";

export default function TitleCar(props) {
  const { titolo } = props;
  return (
    <div
      className="md:w-2/4 xs:w-4/4 xs:pb-3 flex justify-center items-center text-center"
      style={{
        color: "var(--rosone)",
        backgroundColor: "var(--violone)",
        height: "100%",
      }}
    >
      <TestoAnimato> {titolo}</TestoAnimato>
    </div>
  );
}
