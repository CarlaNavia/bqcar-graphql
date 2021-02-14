import React from "react";
import { useState } from "react";
import { ADDCAR } from "../lib/gql-car-service";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

export default function AddCar() {
  const [model, setModel] = useState("");
  const [colour, setColour] = useState("");
  const [carRegistration, setCarRegistration] = useState("");
  const history = useHistory();

  const [addCar] = useMutation(ADDCAR);

  const handleSubmit = (event) => {
    event.preventDefault();
    addCar({ variables: { model, colour, carRegistration } }).then((result) => {
      history.push("/mycar");
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="model"
          placeholder="Modelo"
          onChange={(event) => {
            setModel(event.target.value);
          }}
        />
        <input
          type="text"
          name="colour"
          placeholder="Color"
          onChange={(event) => {
            setColour(event.target.value);
          }}
        />
        <input
          type="text"
          name="carRegistration"
          placeholder="Matrícula"
          onChange={(event) => {
            setCarRegistration(event.target.value);
          }}
        />
        <button type="submit">Añadir coche</button>
      </form>
    </div>
  );
}
