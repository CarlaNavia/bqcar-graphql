import React from "react";
import "./ListItem.css";

export default function ListItem({ eachRide = {}, isDriver = false }) {
  const rideDate = new Date(Number(eachRide.rideDate));

  return (
    <div className="card page">
      <div className="card-schedule">
        <p>
          {rideDate.getDate()}/{rideDate.getMonth()}/{rideDate.getFullYear()}
        </p>
        <p>
          {rideDate.getHours()}:{rideDate.getMinutes()}h.
        </p>
      </div>
      <br />
      {isDriver && (
        <div>
          <p className="card-tags ">Cliente:</p>
          <p className="card-margin-details">
            {eachRide.clientId.firstName} {eachRide.clientId.lastName}
          </p>
        </div>
      )}
      {!isDriver && (
        <div>
          <p className="card-tags ">Conductor: </p>
          <p className="card-margin-details">
            {eachRide.driverId.firstName} {eachRide.driverId.lastName}
          </p>
        </div>
      )}
      <br />
      <p className="card-tags ">Coche:</p>
      <ul>
        <li className="card-margin-details">Modelo: {eachRide.carId.model}</li>
        <li className="card-margin-details">Color: {eachRide.carId.colour}</li>
        <li className="card-margin-details">
          Matrícula: {eachRide.carId.carRegistration}
        </li>
      </ul>
    </div>
  );
}
