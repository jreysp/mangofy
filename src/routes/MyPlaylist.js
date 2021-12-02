import React from 'react'
import { useAuth } from '../contexts/AuthContext.js'
import { useState, useEffect } from 'react'
import app from '../firebase.js';
import RemoveButton from '../components/RemoveButton.js'

function MyPlaylist(){
    const [songs, setSongs] = useState([]);
    const {currentUser} = useAuth();
  
    useEffect(() => {
      app.firestore().collection('users').doc(currentUser.uid).collection('Playlist').
      get().then((snapshot) => {
        setSongs(snapshot.docs.map((doc) => doc.data()));
      });

      app.firestore().collection('users').doc(currentUser.uid).collection('Playlist').onSnapshot((snapshot) => {
        setSongs(snapshot.docs.map((doc) => doc.data()));
      });

    }, []);
    
    return(
        <div className="myplaylist">
        <h1>My Playlist</h1>
        <DisplaySongs input = {songs}/>
        </div>
    )
}

function DisplaySongs(all_songs)
  {
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
            <RemoveButton
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

export default MyPlaylist;