import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="notFoundWrapper">
      <h1>404</h1>
      <h2>Not Found Page</h2>
      <p>
        Go to <Link to="/">Main Page</Link>
      </p>
    </div>
  );
};
