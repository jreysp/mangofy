import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './routes/Home.js'
import Login from './routes/Login.js'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
