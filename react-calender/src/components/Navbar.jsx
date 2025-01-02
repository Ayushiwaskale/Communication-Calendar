import React, { useState } from "react";
import { Link } from "react-router-dom";
import NotificationComponent from "./NotificationComponent"; // Make sure this is the correct path
import './Navbar.css'; // Ensure this path is correct

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                Communication-Calendar
            </div>

            {/* Hamburger icon for mobile */}
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            {/* Navigation links */}
            <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
                <ul className="navbar-links">
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/companies">Companies</Link></li>
                    <li><Link to="/calendar">Calendar</Link></li>
                    <li><Link to="/analytics">Analytics</Link></li>

                    {/* Notification Icon */}
                    <li>
                        <NotificationComponent />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
