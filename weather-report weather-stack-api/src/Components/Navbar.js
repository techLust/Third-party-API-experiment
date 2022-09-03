import React from "react";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div className="nav_container">
      <div className="nav-item">
        <li>
          <Link to="/">Home</Link>
        </li>
      </div>
    </div>
  );
};
export default navbar;
