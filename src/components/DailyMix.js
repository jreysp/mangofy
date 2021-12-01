import { useState, useEffect } from 'react'
import app from '../firebase.js';
import 'firebase/compat/firestore';
import Playlist from '../playlist.js'
import { useAuth } from '../contexts/AuthContext'

function DailyMix() {
    const [songs, setSongs] = useState([]); 
    const {currentUser} = useAuth();

    useEffect(() => {
        app.firestore().collection('songs').get().then((snapshot) => {
        setSongs(snapshot.docs.map((doc) => doc.data()));
        });
    
    }, []);

    //find 10 random songs
    function randomPlaylist(songs) {
        var random = []; 
        const all_songs = songs;

        const playlist = new Playlist();

        //console.log(songs.input.length);
        //console.log(all_songs.length);

        for(let i = 0; i < 10; i++) {
            var rand_index = Math.floor(Math.random() * all_songs.length);
            

            var cur_song = all_songs[rand_index]

            var song = {
                artist: cur_song.artist,
                genre: cur_song.genre,
                name: cur_song.name
            }
            playlist.addSongToPlaylist2(currentUser.uid, song, 'Daily Mix')
        }

    }


}

export default DailyMix;