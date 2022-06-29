import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const navbar = () => {
  return (
    <div className="nav_container">
      <div className="nav-item">
        <li>
          <Link to="/">FLURN</Link>
        </li>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};
export default navbar;
