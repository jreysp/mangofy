import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Homepage</h1>
            <div><Link to="/login">Login</Link></div>
        </div>
    );
}

export default Home;