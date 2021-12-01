import { Link } from 'react-router-dom';
import logo from '../mangofy_logo-03.png';
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate()

    return (
        <div className="navbar">
            <img src={logo} onClick={() => navigate("/")} className="logo-navbar"/>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/">Home</Link></li>
        </div>
    );
}

export default NavBar;