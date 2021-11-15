import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './routes/Home.js'
import Register from './routes/Register.js'
import logo from './mangofy_logo-03.png';
import './App.css';

function App() {
  return (
   <BrowserRouter>
      <NavBar />
      <img src={logo} className="logo"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
