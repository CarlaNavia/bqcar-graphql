import React from "react";
import { withAuth } from "../../lib/AuthProvider";
import { Link } from "react-router-dom";
import { CURRENTRIDE } from "../../lib/gql-rides-service";
import { STATUS, MYCAR } from "../../lib/gql-car-service";
import { useQuery, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import CurrentRide from "../../components/CurrentRide/CurrentRide";
import "./Home.css";

function Home({ user = {}, logout = () => {} }) {
  const { loading, error, data: dataCurrentRide } = useQuery(CURRENTRIDE);
  const { data: dataMyCar } = useQuery(
    MYCAR
  );
  const history = useHistory();

  const [carStatus] = useMutation(STATUS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleStatus = (event) => {
    event.preventDefault();
    carStatus().then((result) => {
      history.push("/mycar");
    });
  };
  return (
    <div>
      <h1 className="home-title">¡Bienvenidx {user && user.firstName}!</h1>
      {user && !user.isDriver && !dataCurrentRide.currentRide && (
        <div>
          <h1 className="home-title">
            Pulse en el siguiente botón para solicitar un viaje:
          </h1>
          <Link to="/confirm" className="service-btn">
            Pedir un coche
          </Link>
        </div>
      )}
      {user &&
        user.isDriver &&
        !dataCurrentRide.currentRide &&
        dataMyCar.car &&
        !dataMyCar.car.isAvailable && (
          <div>
            <p className="home-title">
              Pulse en el siguiente botón para que tu coche aparezca en la
              plataforma:
            </p>
            <button onClick={handleStatus} className={"opt-btn-available"}>
              Disponible
            </button>
          </div>
        )}
      {user && dataCurrentRide.currentRide && (
        <CurrentRide
          currentRide={dataCurrentRide.currentRide}
          isDriver={user.isDriver}
        />
      )}
    </div>
  );
}

export default withAuth(Home);
