import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './routes/Home.js'
import Register from './routes/Register.js'
import logo from './mangofy_logo-03.png'
import parseSongs from './backend/search.js'
import './App.css';


//var cur_song = all_songs.search_songs("Classical");
//var cur_song = all_songs.search_songs_name("Levitating");

console.log("FROM APP.JS");
//console.log(cur_song);

function App() {
  return (
   <BrowserRouter>
      <NavBar />
      <img src={logo} className="logo"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <SearchBar/>
      <DisplaySongs input = {search("Levitating")}/>
      
   </BrowserRouter>
  );
}
//if on click
//<DisplaySongs input = {search(searched_string)}/>

//Searching code for the search bar
function SearchBar() {
  //<DisplaySongs input = {search("Levitating")}/>
  //onClick = {() => {console.log("Click");}}
  return (
    <input id="searchbar" onkeyup="DisplaySongs()" type="text"
    name="search" placeholder="Search for songs"/>
  );
  /*<div>
          <label for="site-search">Search for a song:<br></br></label>
          <input type="search" id="site-search" name="q" aria-label="Search through site content"/>
          <button>Search</button>
      </div>*/ 
}
function search(search_string)
{
  const all_songs = new parseSongs();
  //all_songs.printSongs();
  var cur_song = all_songs.search_songs(search_string);
  return cur_song;
}
function DisplaySongs(all_songs)//all_songs
{
  //var search_term = document.getElementById('searchbar').value;
  //var all_songs = search(search_term);

  var array = [];
  var html_obj = <h1>Song List:</h1>;
  array.push(html_obj);
  console.log(all_songs);
  //console.log(all_songs.input.length);
 for(var i = 0; i < all_songs.input.length; i++)
 {
  const name = all_songs.input[i].name;
  const artist = all_songs.input[i].artist;
  const genre = all_songs.input[i].genre;
   
  var temp = <div><p>
    Song {i+1}:<br></br>
    {name}<br></br>
    Artist: {artist}<br></br>
    Genre: {genre}<br></br>
    </p></div>;
  array.push(temp);
 }
 return array;
}


//all_songs.search_songs_name("NON-EXISTENT SONG");

export default App;
