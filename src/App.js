import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './routes/Home.js'
import Login from './routes/Login.js'
import logo from './logo.svg';
import './App.css';

function NavBar() {
  // TODO: add a title that changes depending on the current route
  return (
      <header className="App-header">
          <div className="App-header-left">
              <a href="/">
                  <img className="logo" src={logo} />
              </a>
          </div>
          <div className="App-header-right">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
          </div>
      </header>
  );
}

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
