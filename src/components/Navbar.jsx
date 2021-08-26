import React from "react";
import { Link } from "gatsby";

const nav = {
  width: "300px",
};
const navul = {
  display: "flex",
  listStyleType: "none",
  justifyContent: "space-between",
  padding: 0,
};
const Navbar = () => {
  return (
    <header>
      <nav style={nav}>
        <ul style={navul}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
