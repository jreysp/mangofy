import { Link } from 'react-router-dom';
//THIS IS THE PAGE FOR LOGINS

function Home() {
    return (
        <div>
            <h1>Homepage</h1>
            <div><Link to="/register">Register</Link></div>
        </div>
    );
}

export default Home;