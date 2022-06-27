import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
const navbar = () => {
  return (
    <div className="nav_container">
      <div className="nav-item">
        <li>
          <Link to="/">FLURN</Link>
        </li>
      </div>
      <div>
        <SearchBox />
      </div>
    </div>
  );
};
export default navbar;
