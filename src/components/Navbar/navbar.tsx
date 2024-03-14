import { Link } from "react-router-dom";
import './navbar.css'
import logo from '../../assets/logo.png'



const Navbar = () => {
    return (
    <div className="nav">
        <div className="nav-logo">
            <img src={logo} alt="Logo" />
        </div>
            <ul className='nav-menu'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/formulario"}>Nova Lista</Link></li>
            <li className='nav-newlist'><Link to={"/lista"}>Sua lista</Link></li>
        </ul>
    </div>
    )
}

export default Navbar;