import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './routes/Home.js'
import Register from './routes/Register.js'
import logo from './mangofy_logo-03.png';
import './App.css';

function App() {
  return (
   <div className="body">
   <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
