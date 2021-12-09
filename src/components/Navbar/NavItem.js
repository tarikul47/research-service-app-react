import React from "react";

const NavItem = (props) => {
    const link = `#${props.name.toLowerCase()}`
  return (
    <li className="nav-item">
      <a className="nav-link link text-white display-7" href={link}>
        {props.name}
      </a>
    </li>
  );
};

export default NavItem;
