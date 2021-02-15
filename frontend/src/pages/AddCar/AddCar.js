import React from "react";
import { useState } from "react";
import { ADDCAR } from "../../lib/gql-car-service";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import "./AddCar.css";

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
      <form onSubmit={handleSubmit} className="add-form">
        <h1 className="addcar-title">Añada un coche</h1>
        <input
          type="text"
          name="model"
          className="input-form"
          placeholder="Modelo"
          onChange={(event) => {
            setModel(event.target.value);
          }}
        />
        <br />
        <input
          type="text"
          name="colour"
          className="input-form"
          placeholder="Color"
          onChange={(event) => {
            setColour(event.target.value);
          }}
        />
        <br />
        <input
          type="text"
          name="carRegistration"
          className="input-form"
          placeholder="Matrícula"
          onChange={(event) => {
            setCarRegistration(event.target.value);
          }}
        />
        <br />
        <button type="submit" className="add-form-button">
          Añadir coche
        </button><br/>
        <p className="expl-text">
          Por favor, tenga en cuenta que solamente podrá tener un coche
          publicado en la plataforma. Cada vez que añada un nuevo modelo, el
          anterior quedará automáticamente desactivado.
        </p>
      </form>
    </div>
  );
}
