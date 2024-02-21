import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { IoClose, IoMenu } from "react-icons/io5";
import { navItems } from "./NavItems";
import "./Navbar.css";
import Dropdown from "./Dropdown/Dropdown";

const Navbar = () => {

    const boolMenu: boolean = false;

    const [showMenu, setShowMenu] = useState(boolMenu);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
            setShowMenu(false);
        }
    };

    const boolDropdown:boolean = false;

    const [dropdown, setDropdown] = useState(boolDropdown);

    return (
        <header className="header">
            <nav className="nav container">
                <NavLink to="/" className="nav-logo">
                    WCF
                </NavLink>
                <div className={`nav-menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
                    <ul className="nav-list">
                        {navItems.map((item) => {
                            if (item.title === "Schedules") {
                                return (
                                    <li key={item.id} className="nav-item" onClick={()=>setDropdown(!dropdown)}>
                                        <NavLink className={item.className} to={item.path}>{item.title}</NavLink>
                                        {dropdown && <Dropdown />}
                                    </li>
                                );
                            }
                            return (
                                <li key={item.id} className="nav-item">
                                    <NavLink className={item.className} to={item.path} onClick={closeMenuOnMobile}>{item.title}</NavLink>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="nav-close" id="nav-close" onClick={toggleMenu}>
                        <IoClose />
                    </div>
                </div>

                <div className="nav-toggle" id="nav-toggle" onClick={toggleMenu}>
                    <IoMenu />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;