import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './routes/Home.js'
import Register from './routes/Register.js'
import Search from './routes/Search.js'
import parseSongs from './backend/search.js'
import './App.css';


//var cur_song = all_songs.search_songs("Classical");
//var cur_song = all_songs.search_songs_name("Levitating");

console.log("FROM APP.JS");
//console.log(cur_song);

function App() {
  return (
   <div>
   <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      
   </BrowserRouter>
   </div>
  );
}

export default App;
