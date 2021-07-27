import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <Link to="/">
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/login">
          <li>Login</li>
        </Link>
        <Link style={navStyle} to="/register">
          <li>Register</li>
        </Link>
      </ul>
    </nav>
  );
}
