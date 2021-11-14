import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './routes/Home.js'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
