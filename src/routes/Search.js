import { Link } from 'react-router-dom';
import { useState } from 'react'
import parseSongs from '../backend/search.js'

function Search() {

    const [searchString, setSearchString] = useState("")

    return (
        <div className="search">
            <h1 className="center">Search</h1>
            <SearchBar/>
            <h4>
                <div className="song">
                    <li className="song_number">#</li>
                    <li className="song_name">Title</li>
                    <li className="song_artist">Artist</li>
                    <li className="song_genre">Genre</li>
                    <div><br/></div>
                </div>
            </h4>
            <DisplaySongs input = {search("Pop")}/>
        </div>
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
    /*var html_obj = <h1>Song List:</h1>;
    array.push(html_obj);*/
    console.log(all_songs);
    //console.log(all_songs.input.length);
   for(var i = 0; i < all_songs.input.length; i++)
   {
    const name = all_songs.input[i].name;
    const artist = all_songs.input[i].artist;
    const genre = all_songs.input[i].genre;
     
    /*var temp = <div><p>
      Song {i+1}:<br></br>
      {name}<br></br>
      Artist: {artist}<br></br>
      Genre: {genre}<br></br>
      </p></div>;*/

      var temp = <div className="song">
        <li className="song_number">{i+1}</li>
        <li className="song_name">{name}</li>
        <li className="song_artist">{artist}</li>
        <li className="song_genre">{genre}</li>
        <div><hr/></div>
      </div>
    array.push(temp);
   }
   return array;
  }
  
  
  //all_songs.search_songs_name("NON-EXISTENT SONG");


export default Search;