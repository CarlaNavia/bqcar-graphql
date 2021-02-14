import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { MYRIDES } from "../lib/gql-rides-service";
import List from "../components/List";
import { withAuth } from "../lib/AuthProvider";

function MyRides({ user }) {
  const { loading, error, data } = useQuery(MYRIDES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>MY RIDES</h1>
      {data.allRides.length === 0 && "Aún no has realizado ningún viaje."}
      {data.allRides.length > 0 && (
        <List isDriver={user.isDriver} allRides={data.allRides} />
      )}
    </div>
  );
}
export default withAuth(MyRides);
