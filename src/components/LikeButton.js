import React from 'react'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

function LikeButton() {

    const [likedSongs, setLikedSongs] = useState();

    function likeSong() {
        return;
    }

    return(
        <button onClick={likeSong}>Like</button>
    )
}

export default LikeButton;