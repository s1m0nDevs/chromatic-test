import React from "react";
import { Link } from "react-router-dom";

export const Navigator = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/favourite">Favourite</Link>
        </li>
      </ul>
    </nav>
  );
};
