import React, { useState } from "react";
import { serviceDropdown } from "../NavItems";
import { NavLink } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {

  const boolDropdown: boolean = false;

  const [dropdown, setDropdown] = useState(boolDropdown);

  return (
    <>
      <ul className={dropdown ? "dropdown-menu clicked" : "dropdown-menu"} onClick={() => setDropdown(!dropdown)}>
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
              <NavLink to={item.path} className={item.className} onClick={() => setDropdown(false)}>
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;