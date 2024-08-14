import React, { useState } from 'react';
import '../assets/style/Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <nav className={isOpen ? 'open' : ''}>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about_us">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/market-analysis">Market Analysis</Link></li>
                    <li><Link to="/contact_us">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
};
