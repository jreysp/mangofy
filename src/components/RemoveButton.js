import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Playlist from '../playlist';
import 'firebase/compat/firestore';

function RemoveButton(props) {
    
    const {currentUser} = useAuth();

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
            className="remove_button"
            onClick={() => removeSong(props.song)}>
                -
        </button>
        </div>
        
    )
    
}

export default RemoveButton;