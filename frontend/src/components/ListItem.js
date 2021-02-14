import React from "react";

export default function ListItem({ eachRide = {}, isDriver = false }) {
  const rideDate = new Date(Number(eachRide.rideDate));

  return (
    <div>
      <h1>Detalles del viaje</h1>
      <p>
        Día:{rideDate.getDate()}/{rideDate.getMonth()}/{rideDate.getFullYear()}
      </p>
      <p>
        Hora: {rideDate.getHours()}:{rideDate.getMinutes()}
      </p>
      {isDriver && (
        <div>
          <h1>Detalles del cliente:</h1>
          <p>
            {eachRide.clientId.firstName} {eachRide.clientId.lastName}
          </p>
        </div>
      )}
      {!isDriver && (
        <div>
          <h1>Detalles del conductor:</h1>
          <p>
            {eachRide.driverId.firstName} {eachRide.driverId.lastName}
          </p>
        </div>
      )}
      <h1>Detalles del coche:</h1>
      <ul>
        <li>Modelo: {eachRide.carId.model}</li>
        <li>Color: {eachRide.carId.colour}</li>
        <li>Matrícula: {eachRide.carId.carRegistration}</li>
      </ul>
    </div>
  );
}
