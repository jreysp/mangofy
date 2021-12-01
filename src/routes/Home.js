import React from 'react'
import { Alert } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.js'
import cover from '../mangofy_playlist-01.png';
import 'firebase/compat/firestore';

function Home() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            navigate("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    function handlePlaylist(name) {
        setError("")

        if(name == "my")
        try {
            navigate("/myplaylist")
        } catch {
            setError("Failed to go to my playlist")
        }

        if(name == "daily")
        try {
            navigate("/daily")
        } catch {
            setError("Failed to go to daily playlist")
        }
    }

    return (
        <div className="home">
            <div className="row">
            <div className="col1">
            { error && <Alert variant="danger">{error}</Alert>}
            <h1>Profile</h1>
            <h2>Email</h2> <body>{currentUser.email}</body>
            <div>
                <button
                    onClick={handleLogout}
                    style={{
                        paddingLeft: "65px",
                        paddingRight: "65px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        fontFamily: "Mont Heavy",
                        color: "white",
                        backgroundColor: "orange",
                        marginBottom: "10px",
                    }} >
                    LOGOUT
                </button>
            </div>
            </div>
            <div className="col2">
            <h1>My Playlists</h1>
            <div className ="row">
            <div className ="centered">
                <div>
                    <button
                            onClick={() => handlePlaylist("my")}
                            className="playlist_button"
                            >
                            My Playlist
                        </button>
                </div>
                <img
                    src={cover} 
                    className="playlist-cover"
                    onClick={() => handlePlaylist("my")}/>
                
            </div>
            <div>
                <div>
                    <button
                            onClick={() => handlePlaylist("daily")}
                            className="playlist_button" >
                            Daily Mix
                        </button>
                    </div>
            
            <img
                src={cover} 
                className="playlist-cover"
                onClick={() => handlePlaylist("daily")}/>
            </div>
            </div>
            </div>
            </div>
        </div>  
    );
}


export default Home;