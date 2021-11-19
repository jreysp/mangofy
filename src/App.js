import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './routes/Home.js'
import Register from './routes/Register.js'
import logo from './mangofy_logo-03.png'
import parseSongs from './backend/search.js'
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
const all_songs = new parseSongs();
all_songs.printSongs();
//var cur_song = all_songs.search_songs("Classical");
//var cur_song = all_songs.search_songs_name("Levitating");
var cur_song = all_songs.search_songs_genre("Classical");

console.log("FROM APP.JS");
console.log(cur_song);

//all_songs.search_songs_name("NON-EXISTENT SONG");

export default App;
