import React from "react";
import { FINALIZERIDE } from "../../lib/gql-rides-service";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import "./CurrentRide.css";

export default function CurrentRide({ currentRide, isDriver = false }) {
  const [finalizeRide] = useMutation(FINALIZERIDE);
  const history = useHistory();

  const handleFinalize = (event) => {
    event.preventDefault();
    finalizeRide().then((result) => {
      history.push("/myrides");
    });
  };

  const renderDriver = () => {
    return (
      <div>
        <p className="card-tags ">Conductor:</p>
        <p className="card-margin-details">
          {currentRide.driverId.firstName} {currentRide.driverId.lastName}
        </p>
      </div>
    );
  };
  const renderClient = () => {
    return (
      <div>
        <p className="card-tags ">Cliente:</p>
        <p className="card-margin-details">
          {currentRide.clientId.firstName} {currentRide.clientId.lastName}
        </p>
      </div>
    );
  };

  return (
    <div>
      <h1 className="currentride-title">Los detalles de tu próximo viaje:</h1>
      <div className="card page">
        <div>
          {!isDriver && renderDriver()}
          {isDriver && renderClient()}
          <br />
          <p className="card-tags ">Coche:</p>
          <ul>
            <li className="card-margin-details">
              Modelo: {currentRide.carId.model}
            </li>
            <li className="card-margin-details">
              Color: {currentRide.carId.colour}
            </li>
            <li className="card-margin-details">
              Matrícula: {currentRide.carId.carRegistration}
            </li>
          </ul><br/>
          {isDriver && (
            <button onClick={handleFinalize} className="end-btn">
              Finalizar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
