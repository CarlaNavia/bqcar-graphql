import React from "react";
import { withAuth } from "../lib/AuthProvider";

function Home({ logout = () => {} }) {
  return (
    <div>
      <h1>Contenido privado</h1>
      <button
        onClick={() => {
          logout();
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default withAuth(Home);
