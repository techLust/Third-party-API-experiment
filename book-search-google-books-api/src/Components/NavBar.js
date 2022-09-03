import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
const navbar = () => {
  return (
    <div className="nav_container">
      <div className="nav-item">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/signin">Login</Link>
        </li>
      </div>
      <div>
        <SearchBox />
      </div>
    </div>
  );
};
export default navbar;
