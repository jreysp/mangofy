import { Link } from 'react-router-dom';
import logo from '../logo-white.png';
//THIS IS THE PAGE FOR LOGINS

function Home() {
    return (
        <div className="home">
            <img src={logo} className="logo-home"/>
            <h1>Welcome</h1>
            <div>
               {/* Code for login goes here */}
               This is where the login form goes.
            </div>
            <div><Link to="/register">Click Here to Register</Link></div>
        </div>
    );
}

export default Home;