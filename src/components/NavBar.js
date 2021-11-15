import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
        </div>
    );
}

export default NavBar;