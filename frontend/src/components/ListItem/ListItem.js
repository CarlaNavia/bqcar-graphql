import React from "react";
import "./ListItem.css";

export default function ListItem({ eachRide = {}, isDriver = false }) {
  const rideDate = new Date(Number(eachRide.rideDate));

  const formatDate = ({ locale = "es", value }) => {
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(value);
  };

  const formatTime = ({ locale = "es", value }) => {
    return new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(value);
  };

  return (
    <div className="card page">
      <div className="card-schedule">
        <p>{formatDate({ value: rideDate })}</p>
        <p>{formatTime({ value: rideDate })}h.</p>
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
