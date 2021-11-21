import { Link } from 'react-router-dom';
import logo from '../mangofy_logo-03.png';

function NavBar() {
    return (
        <div className="navbar">
            <img src={logo} className="logo-navbar"/>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/">Home</Link></li>
        </div>
    );
}

export default NavBar;