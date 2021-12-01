import React from 'react'
import { Button, Alert } from 'react-bootstrap'
import { useRef, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.js'
import logo from '../mangofy_logo-03.png';
import parseSongs from '../backend/search.js';
import app from '../firebase.js';
import DailyMix from '../components/DailyMix.js'
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
            { error && <Alert variant="danger">{error}</Alert>}
            <h1>Profile</h1>
            <h2>Email:</h2> {currentUser.email}
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
            <h1>My Playlists</h1>
            <div>
            <button
                    onClick={() => handlePlaylist("my")}
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
                    My Playlist
                </button>
            </div>
            <div>
            <button
                    onClick={() => handlePlaylist("daily")}
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
                    Daily Playlist
                </button>
            </div>
        </div>  
    );
}


export default Home;