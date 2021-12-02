import { useRef, useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext.js'
import 'firebase/compat/firestore';
import app from '../firebase';
import { useNavigate } from 'react-router-dom';
import Playlist from '../playlist';

function AddSong() {

    const { currentUser } = useAuth();
    const titleRef = useRef();
    const artistRef = useRef();
    const genreRef = useRef();
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if (titleRef.current.value === "" || artistRef.current.value === "" || genreRef.current.value === "") {
            return;
        }

        var song = {
            artist: artistRef.current.value,
            genre: genreRef.current.value,
            name: titleRef.current.value,
        }

        const playlist = new Playlist();
        await playlist.addSongToPlaylist2(currentUser.uid, song, 'Playlist');

        navigate("/")
    }

    return (
        <div className="edit_profile">
            <h1> Add Song </h1>
            <div
                style={{
                    paddingRight: "388px",
                    paddingBottom: "5px"
                }}
            >
                Title
            </div>

            <div>
                <input
                    ref={titleRef}
                    style={{
                        paddingLeft: "10px",
                        paddingRight: "280px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        fontSize: "16px",
                        fontFamily: "Helmet",
                        color: "black",
                        marginBottom: "30px"
                    }}
                />
            </div>

            <div
                style={{
                    paddingRight: "388px",
                    paddingBottom: "5px"
                }}
            >
                Artist
            </div>

            <div>
                <input
                    ref={artistRef}
                    style={{
                        paddingLeft: "10px",
                        paddingRight: "280px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        fontSize: "16px",
                        fontFamily: "Helmet",
                        color: "black",
                        marginBottom: "30px"
                    }}
                />
            </div>

            <div
                style={{
                    paddingRight: "388px",
                    paddingBottom: "5px"
                }}
            >
                Genre
            </div>

            <div>
                <input
                    ref={genreRef}
                    style={{
                        paddingLeft: "10px",
                        paddingRight: "280px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        fontSize: "16px",
                        fontFamily: "Helmet",
                        color: "black",
                        marginBottom: "30px"
                    }}
                />
            </div>

            <button
                onClick={handleSubmit}
                style={{
                    paddingLeft: "65px",
                    paddingRight: "65px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    fontFamily: "Mont Heavy",
                    color: "white",
                    backgroundColor: "orange",
                    marginBottom: "10px",
                }}
            >
                Submit
            </button>
        </div>
    );

}

export default AddSong;