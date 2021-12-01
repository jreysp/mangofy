import React from 'react'
import { useAuth } from '../contexts/AuthContext.js'
import { useState, useEffect } from 'react'
import app from '../firebase.js';
import Playlist from '../playlist.js';
import { dB } from '../firebase.js'
import LikeButton from '../components/LikeButton.js'

function Daily(){
    const [songs, setSongs] = useState([]);
    const {currentUser} = useAuth();
  
    useEffect(() => {
      app.firestore().collection('users').doc(currentUser.uid).collection('Daily Mix').
      get().then((snapshot) => {
        setSongs(snapshot.docs.map((doc) => doc.data()));
      });

      app.firestore().collection('users').doc(currentUser.uid).collection('Daily Mix').onSnapshot((snapshot) => {
        setSongs(snapshot.docs.map((doc) => doc.data()));
      });

    }, []);


    const [all_songs, set_Songs] = useState([]); 
  
    useEffect(() => {
      app.firestore().collection('songs').get().then((snapshot) => {
        set_Songs(snapshot.docs.map((doc) => doc.data()));
      });
  
    }, []);

    return(
        <div className="dailymix">
        <h1>Daily Mix</h1>
        <DisplaySongs input = {songs}/>
        <div>
        <div>
            <button
                    onClick={() => randomPlaylist(all_songs, currentUser.uid)}
                    className="daily_generate"
                    >
                    Generate Daily Mix
                </button>
        </div>
        <div>
            <button
                    onClick={() => clear(currentUser.uid)}
                    className="daily_clear"
                    >
                    Clear Daily Mix
                </button>
        </div>
        </div>
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

function randomPlaylist(songs, userid) {
        var random = []; 
        const all_songs = songs;

        const playlist = new Playlist();

        for(let i = 0; i < 10; i++) {
            var rand_index = Math.floor(Math.random() * all_songs.length);
            
            var cur_song = all_songs[rand_index]

            var song = {
                artist: cur_song.artist,
                genre: cur_song.genre,
                name: cur_song.name
            }
            playlist.addSongToPlaylist2(userid, song, 'Daily Mix')
        }
    }

function clear(userid){
    var ref = dB.collection('users').doc(userid).collection('Daily Mix')
    
    ref.get().then((querySnapshot) => {
        querySnapshot.forEach(doc => {
            doc.ref.delete()
        });
    });
}

export default Daily;