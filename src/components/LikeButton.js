import React from 'react'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Playlist from '../playlist';

function LikeButton() {

    const [likedSongs, setLikedSongs] = useState();
    
    const {currentUser} = useAuth();
        
    function likeSong() {
        const playlist = new Playlist();
        var song = {
            name: "Happy",
            artist: "Pharrell Williams"
        }
        playlist.addSongToPlaylist(currentUser.uid, song);
        /*playlist.removeSongFromPlaylist(currentUser.uid, song)
        */
        return;
    }

    return(
        <button onClick={likeSong}>Like</button>
    )
}

export default LikeButton;