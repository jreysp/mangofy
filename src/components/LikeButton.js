import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useState, useEffect } from 'react'
import Playlist from '../playlist';
import 'firebase/compat/firestore';

function LikeButton(props) {
    
    const {currentUser} = useAuth();
    const [liked, setLiked] = useState(false);
    const name = props.name;
     
    function likeSong(song) {
        const playlist = new Playlist();
        playlist.addSongToPlaylist(currentUser.uid, song);
        console.log(playlist.getTotalSongList());
        return;
    }
    function unlikeSong(song){//NOT YET USED
        const playlist = new Playlist();
        playlist.removeSongFromPlaylist(currentUser.uid, song);
        return;
    }

    function handleChange(e, song) {
        setLiked(!liked)
        const playlist = new Playlist();

        var song1 = {
            artist: song.artist,
            genre: song.genre,
            name: song.name,
        }

        if (!liked) {
            playlist.addSongToPlaylist2(currentUser.uid, song1);
        } else {
            playlist.removeSongFromPlaylist2(currentUser.uid, song1.name);
        }
        return;
    }

    function addSong(song) {

        var song1 = {
            artist: song.artist,
            genre: song.genre,
            name: song.name,
        }

        const playlist = new Playlist();
        playlist.addSongToPlaylist2(currentUser.uid, song1);
    }

    function removeSong(song) {

        var song1 = {
            artist: song.artist,
            genre: song.genre,
            name: song.name,
        }

        const playlist = new Playlist();
        playlist.removeSongFromPlaylist2(currentUser.uid, song.name);

    }

    
    return(
        <div>
        <button
            className="add_button"
            onClick={() => addSong(props.song)}>
                +
        </button>
        <button
            className="remove_button"
            onClick={() => removeSong(props.song)}>
                -
        </button>
        </div>
        /*
         <input
            type="checkbox"
            checked={liked}
            onChange={(e) => handleChange(e, props.song)}
        />
        <button
            className="like_button"
            onClick={() => {likeSong(song)}}>
            Like
        </button>
        */
        
    )
    
}

export default LikeButton;