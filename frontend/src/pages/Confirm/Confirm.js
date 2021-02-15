import React from "react";
import { RANDOMCAR } from "../../lib/gql-car-service";
import { CONFIRMRIDE } from "../../lib/gql-rides-service";
import { useQuery, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Confirm.css";

export default function Confirm() {
  const { loading, error, data } = useQuery(RANDOMCAR);
  const [confirmRide] = useMutation(CONFIRMRIDE);
  const history = useHistory();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleConfirm = (event) => {
    event.preventDefault();
    confirmRide({ variables: { carId: data.randomCar._id } }).then((result) => {
      history.push("/");
    });
  };
  return (
    <div>
      <h1 className="confirm-title">Tu coche seleccionado es:</h1>
      <div className="card page">
        <p className="card-tags">Modelo: </p>
        <p className="card-margin-details">{data.randomCar.model}</p>
        <br />
        <p className="card-tags">Color:</p>
        <p className="card-margin-details">{data.randomCar.colour}</p>
        <br />
        <p className="card-tags">Matrícula:</p>
        <p className="card-margin-details">{data.randomCar.carRegistration}</p>
      </div>
      <div className="action-btn">
        <Link to="/" className="opt-btn-cxl">
          Cancelar
        </Link>
        <button onClick={handleConfirm} className={"opt-btn-confirm"}>
          Confirmar
        </button>
      </div>
    </div>
  );
}
