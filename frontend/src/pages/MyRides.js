import React from "react";
import { useQuery } from "@apollo/client";
import { MYRIDES } from "../lib/gql-rides-service";
import List from "../components/List";
import { withAuth } from "../lib/AuthProvider";
import "../components/ListItem/ListItem.css";

function MyRides({ user }) {
  const { loading, error, data } = useQuery(MYRIDES);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {user && user.isDriver && <h1 className="rides-title">Mis servicios</h1>}
      {user && !user.isDriver && <h1 className="rides-title">Mis viajes</h1>}
      <div className="text-rides">
        {data.allRides.length === 0 && "Aún no has realizado ningún viaje."}
        </div>
      {data.allRides.length > 0 && (
        <List isDriver={user.isDriver} allRides={data.allRides} />
      )}
    </div>
    
  );
}
export default withAuth(MyRides);
