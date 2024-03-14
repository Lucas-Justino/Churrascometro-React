import { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="nav">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/formulario"}>Nova Lista</Link></li>
                    <li className='nav-newlist'><Link to={"/lista"}>Sua lista</Link></li>
                </ul>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                <div className="icon">{menuOpen ? 'X' : '☰'}</div>
            </div>
        </div>
    );
};

export default Navbar;