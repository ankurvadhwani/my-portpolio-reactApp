import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  let [select, setSelected] = useState(null);
  function handleClick(e) {
    e.target.classList.add('help');
  }
  return (
    <ul>
      <Link onClick={handleClick} class="lis" to="/">
        {" "}
        Home
      </Link>
      <Link onClick={handleClick} class="lis" to="/blog">
        {" "}
        Blog
      </Link>
      <Link onClick={handleClick} class="lis" to="/about">
        {" "}
        About
      </Link>
      <Link onClick={handleClick} class="lis" to="/project">
        {" "}
        Project
      </Link>
    </ul>
  );
}
export default Header;
