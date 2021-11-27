import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react'
import parseSongs from '../backend/search.js'

function Search() {

    const searchStringRef = useRef()
    const [searchString, setSearchString] = useState("")

    function handleOnChange() {
        setSearchString(searchStringRef.current.value)
    }

    return (
        <div className="search">
            <h1 className="center">Search</h1>
            <input
                id="searchbar"
                onKeyUp={handleOnChange}
                type="text"
                name="search"
                ref={searchStringRef}
                placeholder="Search for songs"
            />
            <DisplaySongs input = {search(searchString)}/>
        </div>
    );
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
    var html_obj = <h4>
        <div className="song">
            <li className="song_number">#</li>
            <li className="song_name">Title</li>
            <li className="song_artist">Artist</li>
            <li className="song_genre">Genre</li>
            <div><br/></div>
        </div>
    </h4>;

    if (all_songs.input.length !== 0) {
        array.push(html_obj);
    }
    //console.log(all_songs);
    //console.log(all_songs.input.length);
   for(var i = 0; i < all_songs.input.length; i++)
   {
    const name = all_songs.input[i].name;
    const artist = all_songs.input[i].artist;
    const genre = all_songs.input[i].genre;

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