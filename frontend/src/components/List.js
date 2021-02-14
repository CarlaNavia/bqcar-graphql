import React from "react";
import ListItem from "./ListItem";

export default function List({ allRides = [], isDriver = false }) {
  return (
    <ul>
      {allRides.map((eachRide, index) => {
        return <ListItem key={index} eachRide={eachRide} isDriver={isDriver} />;
      })}
    </ul>
  );
}
