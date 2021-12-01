import React from 'react'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Playlist from '../playlist';

function LikeButton(song) {

    const [likedSongs, setLikedSongs] = useState();
    
    const {currentUser} = useAuth();
        
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

    return(
        <button onClick={() => {likeSong(song)}}>Like</button>
    )
}

export default LikeButton;