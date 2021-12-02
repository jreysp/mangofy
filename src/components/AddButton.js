import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useState, useEffect } from 'react'
import Playlist from '../playlist';
import 'firebase/compat/firestore';

function AddButton(props) {
    
    const {currentUser} = useAuth();

    function addSong(song) {

        var song1 = {
            artist: song.artist,
            genre: song.genre,
            name: song.name,
        }

        const playlist = new Playlist();
        playlist.addSongToPlaylist2(currentUser.uid, song1, 'Playlist');
    }

    return(
        <div>
        <button
            className="add_button"
            onClick={() => addSong(props.song)}>
                +
        </button>
        </div>
        
    )
    
}

export default AddButton;