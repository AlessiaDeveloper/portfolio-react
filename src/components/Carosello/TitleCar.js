import React from "react";
import ButtonCar from "../UI/ButtonCar";
import { IoCaretBackCircle } from "react-icons/io5";
import { useCaroselloContext } from "../Context/CarContext";
import TestoAnimato from "../UI/TestoAnimato";

export default function TitleCar(props) {
  const { titolo } = props;
  return (
    <div
      className="w-2/4  flex justify-center items-center text-center"
      style={{
        color: "var(--rosone)",
        backgroundColor: "var(--violone)",
        height: "100%",
      }} // Usa una percentuale dell'altezza del genitore
    >
      <TestoAnimato> {titolo}</TestoAnimato>
    </div>
  );
}
