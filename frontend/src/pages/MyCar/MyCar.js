import React from "react";
import { MYCAR } from "../../lib/gql-car-service";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import "./MyCar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function MyCar() {
  const { loading, error, data } = useQuery(MYCAR);
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="car-title">Mi coche</h1>

      <Link to="/addcar" className="add-car">
        <FontAwesomeIcon
          icon={faPlusCircle}
          className="nav__icon__plus"
          color="#EC7063"
        />
      </Link>
      <div className="card page">
        <p className="card-tags">Modelo: </p>{" "}
        <p className="card-margin-details">{data && data.car.model}</p>
        <br />
        <p className="card-tags">Color:</p>{" "}
        <p className="card-margin-details">{data && data.car.colour}</p>
        <br />
        <p className="card-tags">Matrícula:</p>
        <p className="card-margin-details">
          {data && data.car.carRegistration}
        </p>
      </div>
 
    </div>
  );
}
export default MyCar;
