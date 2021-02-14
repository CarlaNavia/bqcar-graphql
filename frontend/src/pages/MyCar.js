import React from "react";
import { MYCAR } from "../lib/gql-car-service";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

function MyCar() {
  const { loading, error, data } = useQuery(MYCAR);
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <p>{data && data.car.model}</p>
      <p>{data && data.car.colour}</p>
      <p>{data && data.car.carRegistration}</p>

      <Link to="/addcar">Añadir un coche</Link>
    </div>
  );
}
export default MyCar;
