import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <ul>
            <li>
                <Link to={"/home"}>Home</Link>
            </li>
            <li>
                <Link to={"/formulario"}>Criar Churrasco</Link>
            </li>
        </ul>
    )
}

export default Navbar;