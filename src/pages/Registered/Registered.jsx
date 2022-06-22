import React from "react";
import { Link, useLocation } from "react-router-dom";

const Registered = () => {
  const location = useLocation();
  const { state } = location;

  return (
  <div>
        <div>{state.data}</div>
        <Link to="/">Ir a tareas</Link>
  </div>
  )
};

export default Registered;
