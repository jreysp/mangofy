import { useState, useRef, useEffect } from 'react'
import parseSongs from '../backend/search.js'
import app from '../firebase.js';
import 'firebase/compat/firestore';
import LikeButton from '../components/LikeButton.js'

function Search() {
  const [songs, setSongs] = useState([]); 
  const searchStringRef = useRef()
  const [searchString, setSearchString] = useState("")

  useEffect(() => {
    app.firestore().collection('songs').get().then((snapshot) => {
      setSongs(snapshot.docs.map((doc) => doc.data()));
    });

    app.firestore().collection('songs').onSnapshot((snapshot) => {
      setSongs(snapshot.docs.map((doc) => doc.data()));
    });

  }, []);

  console.log(songs)

    function handleOnChange() {
        setSearchString(searchStringRef.current.value)
    }

    return (
        <div className="search">
            <h1>Search</h1>
            <input
                id="searchbar"
                onKeyUp={handleOnChange}
                type="text"
                name="search"
                ref={searchStringRef}
                placeholder="Search for songs by title, artist, or genre"
                className="search-input"
            />
            <DisplaySongs input = {search(searchString, songs)}/>
        </div>
    );
}

  function search(search_string, songs)
  {
    const all_songs = new parseSongs();
    var cur_song = all_songs.search_songs(search_string, songs);
    return cur_song;
  }
  function DisplaySongs(all_songs)
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

   for(var i = 0; i < all_songs.input.length; i++)
   {
    const name = all_songs.input[i].name;
    const artist = all_songs.input[i].artist;
    const genre = all_songs.input[i].genre;

    var song_info = {
      name: name,
      artist: artist, 
      genre: genre
    }

      var temp = <div className="song">
        <li className="song_number">{i+1}</li>
        <li className="like_button">
            <LikeButton
                song={song_info}
                />
            </li>
        <li className="song_name">{name}</li>
        <li className="song_artist">{artist}</li>
        <li className="song_genre">{genre}</li>
        <div><hr/></div>
      </div>
    array.push(temp);
   }
   return array;
  }

export default Search;