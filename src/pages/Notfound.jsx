import React from "react";
import { Link } from "react-router-dom";

export function Notfound() {
  return (
    <main className="not-found">
      <section className="not-found-container">
        <h1>404</h1>
        <h2> This page doesn't exist </h2>
        <Link to="/"> Return home </Link>
      </section>
    </main>
  );
}
export default Notfound;