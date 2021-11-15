import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './routes/Home.js'
import Register from './routes/Register.js'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
